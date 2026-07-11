import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DBConnected Sucessfully");

    } catch (error) {
        console.log("🚀 ~ connectDb ~ error:", error)
    }
}
