import User from "../model/user.model.js";

export const getUsersSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne:loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersSidebar: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}