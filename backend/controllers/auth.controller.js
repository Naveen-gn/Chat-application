import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import { generateTokenAndCookie } from '../utils/generateTokenAndCookie.js';



export const signup = async (req, res, next) => {
  const { fullname,username, email, password,confirmPassword,gender } = req.body;
  if (
    !fullname ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender||
    fullname === '' ||
    username === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === '' ||
    gender===''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  if(password !== confirmPassword){
    next(errorHandler(400, 'Password and Confirm Password do not match'));
  }
  const UserName = await User.findOne({ username });
  const UserEmail = await User.findOne({ email });
  if (UserName||UserEmail) {
    next(errorHandler(400, 'Username or email already exists'));
  }
  const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
  const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    fullname,
    username,
    email,
    password: hashedPassword,
    gender,
    profilePicture:
      gender=="male" ? boyProfilePic : girlProfilePic ,

  });

if(newUser){
  await newUser.save();
  generateTokenAndCookie(newUser._Id,res);
    res.status(201).json({
    _id: newUser._id,
    fullname: newUser.fullname,
    username: newUser.username,
    profilePicture: newUser.profilePicture,
  }
  );
}
else{
  next(errorHandler(400, 'User not created'));
}

};



export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
      { id: validUser._id},
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    generateTokenAndCookie(validUser._id,res);
    res
      .status(200)
      .json({
        _id:validUser._id,
        fullname:validUser.fullname,
        username:validUser.username,
        profilePic:validUser.profilePicture
      })
  } catch (error) {
    next(error);
  }
};






// export const google = async (req, res, next) => {
//   const { email, name, googlePhotoUrl } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       const token = jwt.sign(
//         { id: user._id, isAdmin: user.isAdmin },
//         process.env.JWT_SECRET
//       );
//       const { password, ...rest } = user._doc;
//       res
//         .status(200)
//         .cookie('access_token', token, {
//           httpOnly: true,
//         })
//         .json(rest);
//     } else {
//       const generatedPassword =
//         Math.random().toString(36).slice(-8) +
//         Math.random().toString(36).slice(-8);
//       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
//       const newUser = new User({
//         username:
//           name.toLowerCase().split(' ').join('') +
//           Math.random().toString(9).slice(-4),
//         email,
//         password: hashedPassword,
//         profilePicture: googlePhotoUrl,
//       });
//       await newUser.save();
//       const token = jwt.sign(
//         { id: newUser._id, isAdmin: newUser.isAdmin },
//         process.env.JWT_SECRET
//       );
//       const { password, ...rest } = newUser._doc;
//       res
//         .status(200)
//         .cookie('access_token', token, {
//           httpOnly: true,
//         })
//         .json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// };