import jwt from 'jsonwebtoken';

const generateTokenAndCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d",});
    // const cookieOptions = {
    //     maxAge:15*24*60*60*1000,
    //     // httpOnly:true,//cookie can't be accessed by client side script
    //     // sameSite:"strict",//cookie will only be sent in a first-party context
    //     // secure:process.env.NODE_ENV === "production" ? true : false,//cookie will only be sent in https
    // };
    res.cookie("jwt", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    return token;
}
export default generateTokenAndCookie;