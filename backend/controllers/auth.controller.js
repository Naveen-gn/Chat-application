import becrypt from "bcryptjs";
import User from "../model/user.model.js";
import generateTokenAndCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
   try {
    const { name, username, password, gender } = req.body;
    const user = await User.findOne({ username });
    if(user){
        return res.status(400).json({message:"Username is already exist."});
    }
    
    const salt = await becrypt.genSalt(10);
    const hashedPassword = await becrypt.hash(password, salt);

    const boyProfilePic= `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser =new User({
        name,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender==="male"?boyProfilePic:girlProfilePic,
    })
    if (newUser) {
     
        generateTokenAndCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            username:newUser.username,
            profilePic:newUser.profilePic,
        });
    } else {
        res.status(400).json({message:"Invalid user data"});
    }
   
   } catch (error) {
    console.log("Error in signup controller",error.message);
    res.status(500).json({error:"Internal server error"});
   }
};

export const login = async(req, res) => {
   try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user){
        return res.status(400).json({message:"Invalid username."});
    }
    const isMatch = await becrypt.compare(password, user.password ||"");
    if(!isMatch){
        return res.status(400).json({message:"Invalid password."});
    }
   
    generateTokenAndCookie(user._id, res);
    // console.log("Token",token);
    
    res.status(200).json({
        _id:user._id,
        name:user.name,
        username:user.username,
        profilePic:user.profilePic,
    });
    
   } catch (error) {
    console.log("Error in login controller",error.message);
    res.status(500).json({error:"Internal server error"});
   
   }
};

export const logout = async(req, res) => {
    try {
        res.cookie("access_token", "", {maxAge:0});
        res.status(200).json({message:"Logout successfully"});
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};
