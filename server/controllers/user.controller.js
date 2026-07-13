import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.status(400).json({ message: "user does not found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "get current user error" })
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const verifyCloudflareToken = async (req, res) => {
    const { token } = req.body;
    
    if (!token) {
        return res.status(400).json({ success: false, message: "Token is required" });
    }

    try {
        const formData = new URLSearchParams();
        formData.append('secret', process.env.CLOUDFLARE_SECRET_KEY);
        formData.append('response', token);

        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            return res.status(200).json({ success: true, message: "Token verified successfully" });
        } else {
            return res.status(400).json({ success: false, message: "Token verification failed", errors: data['error-codes'] });
        }
    } catch (error) {
        console.error("Cloudflare token verification error:", error);
        return res.status(500).json({ success: false, message: "Internal server error during verification" });
    }
}

