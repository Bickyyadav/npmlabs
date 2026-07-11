import User from "../models/user.model";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ name, email })
        }
        

    } catch (error) {
        console.log("🚀 ~ googleAuth ~ error:", error)

    }
}