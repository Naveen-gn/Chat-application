import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullname:{
      type: String,
      required:true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength:6
    },
    gender: {
      type: String,
      required: true,
      enum:["male","female"]
    },
    profilePicture: {
      type: String,
      default:
        'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;