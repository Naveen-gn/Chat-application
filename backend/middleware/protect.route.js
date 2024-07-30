import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookie.jwt;
        // console.log("token",token);
        if (!token) {
            return res.status(401).json({ error: "You are not authorized. cookie not found." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "unauthorized - Invalid token." });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        // console.log("user",user);
        next();
       
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default protectRoute;