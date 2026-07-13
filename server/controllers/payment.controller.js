import crypto from "crypto";
import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";

export const createOrder = async (req, res) => {
    try {
        const { amount, aiCredits } = req.body;
        if (!amount || !aiCredits) {
            return res.status(400).json({ message: "Invalid plan data" });
        }

        const userId = req.userId || req.user?._id; // Ensure you have user ID from your auth middleware

        const transaction_uuid = crypto.randomUUID();

        // Create Payment Record
        const payment = await Payment.create({
            userId,
            amount,
            aiCredits,
            esewaTransactionId: transaction_uuid,
            status: "created"
        });

        const product_code = process.env.ESEWA_MERCHANT_ID;
        const secret = process.env.ESEWA_SECRET;

        // Hash string format for request: total_amount,transaction_uuid,product_code
        const hashString = `total_amount=${amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
        const signature = crypto.createHmac('sha256', secret).update(hashString).digest('base64');

        const paymentData = {
            amount: amount,
            tax_amount: 0,
            total_amount: amount,
            transaction_uuid: transaction_uuid,
            product_code: product_code,
            product_service_charge: 0,
            product_delivery_charge: 0,
            success_url: `${process.env.CLIENT_URL}/payment/success`,
            failure_url: `${process.env.CLIENT_URL}/payment/failure`,
            signed_field_names: "total_amount,transaction_uuid,product_code",
            signature: signature,
        };

        res.status(200).json({ paymentData, paymentId: payment._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during payment creation" });
    }
}

export const verifyEsewaPayment = async (req, res) => {
    try {
        const { data } = req.query;
        if (!data) return res.status(400).json({ message: "Invalid data" });

        const decodedData = JSON.parse(Buffer.from(data, 'base64').toString('utf-8'));

        if (decodedData.status !== "COMPLETE") {
            return res.status(400).json({ message: "Payment not completed" });
        }

        const secret = process.env.ESEWA_SECRET;

        const signed_field_names = decodedData.signed_field_names.split(',');
        const hashStringDynamic = signed_field_names.map(field => `${field}=${decodedData[field] || ''}`).join(',');
        const dynamicSignature = crypto.createHmac('sha256', secret).update(hashStringDynamic).digest('base64');

        if (dynamicSignature !== decodedData.signature) {
            return res.status(400).json({ message: "Invalid signature" });
        }

        const payment = await Payment.findOne({ esewaTransactionId: decodedData.transaction_uuid });
        if (!payment) return res.status(404).json({ message: "Payment record not found" });

        if (payment.status === "paid") {
            return res.status(200).json({ message: "Payment already verified" });
        }

        payment.status = "paid";
        await payment.save();

        const user = await User.findById(payment.userId);
        console.log("🚀 ~ verifyEsewaPayment ~ user:", user)
        if (user) {
            user.aiCredits += payment.aiCredits;
            console.log("🚀🔴🔴🔴 ~ updated succesfullly~ user:")
            await user.save();
        }

        res.status(200).json({ message: "Payment successful", aiCredits: user ? user.aiCredits : 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during payment verification" });
    }
}