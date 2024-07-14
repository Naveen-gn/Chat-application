import User from "../model/user.model.js";

export const signup = async(req, res) => {
   try {
    const { name, username, password, gender } = req.body;
    const user = await User.findOne({ username });
    if(user){
        return res.status(400).json({message:"Username is already exist."});
    }
    

    const boyProfilePic= `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser =new User({
        name,
        username,
        password,
        gender,
        profilePic: gender==="male"?boyProfilePic:girlProfilePic,
    })
    await newUser.save();
    res.status(201).json({
        _id:newUser._id,
        name:newUser.name,
        username:newUser.username,
        profilePic:newUser.profilePic,
    });
   } catch (error) {
    console.log("Error in signup controller",error.message);
    res.status(500).json({error:"Internal server error"});
   }
};

export const login = (req, res) => {
    res.send("Login route");
};

export const logout = (req, res) => {
    res.send("logout route");
};
