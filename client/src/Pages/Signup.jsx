import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Chaticon from '../assets/chat.png'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai';
const baseUrl = 'http://localhost:5000/';

export default function Signin() {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Gender');
    const options=["male","female"]
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });     
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill all the fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch(`${baseUrl}api/auth/signup`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data=await res.json()
      console.log(data);
      if (data.success===false) {
        setLoading(false);
       return setErrorMessage("Username or Email already exists! Please try again.");
       
      }
      if (res.ok) {
        navigate('/signin')
      }
    } 
    catch (error) {
      setErrorMessage(error.message || "Something went wrong! Please try again.");
      setLoading(false);
    }
  };

  return (
<div className='Signup w-full h-screen flex flex-wrap justify-center overflow-y-auto'>


<div className='w-full mb-10  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2  flex justify-center items-center flex-col '>

<div className="">
  <img src={Chaticon} className='w-80 h-72' />
  {/* <Link to='/' className='text-decoration-none text-white bg-gradient-to-r from-blue-700 via-grey-300 to-grey-500  rounded-full text-3xl p-4'>N-chat</Link> */}
  </div>
  
  <div className='w-3/4 sm:3/4'>
  <h1 className='text-white text-center'>You're connecting with friends, family, or colleagues, our platform provides a seamless and secure way to stay connected.</h1>
  </div>


  </div>

<div className="w-full  md:w-full lg:mt-10 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center  " >
  <div  className='w-96 p-12 rounded-3xl border border-blue-600  mb-20  shadow shadow-slate-70'>
  <h4 className='text-white mb-6 text-center '>Sign up</h4>
        <div className='flex flex-col gap-6 justify-center  '>
          
          <form className='flex flex-col gap-6 justify-center' onSubmit={handleSubmit} >
        <input
          type="text"
          className=" w-full px-4 py-2 rounded-2xl border border-blue-600 focus:outline-none"
          placeholder="fullname"
          id='fullname'
          onChange={handleChange}
        />
        <input
          type="text"
          className=" w-full px-4 py-2 rounded-2xl border border-blue-600 focus:outline-none"
          placeholder="username"
          id='username'
          onChange={handleChange}
        />
        


        <div className="relative">
      <input
        type={passwordShown ? "text" : "password"}
        className="w-full px-4 py-2 border border-blue-600 rounded-2xl focus:outline-none"
        placeholder="password"
        autoComplete='off'
        id='password'
        onChange={handleChange}
        onCopy={(e) => e.preventDefault()}
      />
      <i 
        onClick={togglePasswordVisiblity} 
        className="absolute top-2 right-2 cursor-pointer text-blue-800"
      >
        {passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
      </i>
    </div>


       
    
    <div className='relative'>
    <button onClick={() => setIsOpen(!isOpen)} className='bg-white px-4 py-2 border border-blue-600  focus:outline-none flex justify-between items-center p-3 gap-3 rounded-xl w-full text-gray-400'>
          {selectedOption}
          <AiOutlineDown className='ml-2 text-blue-600 font-bold' />
        </button>
        {isOpen && (
          <ul className="options absolute  top-8 bg-white border-2 border-slate-200 w-full mt-2 py-1 rounded-xl shadow-lg overflow-y-auto">
            {options.map((options) => (
              <li key={options} className="py-1 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick(options)}>
                {options}
              </li>
            ))}
          </ul>
        )}
        </div>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 text-center " type='submit' disabled={loading}>
            {
              loading ? (<>
                <span className='ml-2'>Signing up...</span>
              </>
              ) : 'Sign Up'
            }
            </button>
        </form>
        
        </div>
        
       
        <h4 className='text-white mt-5'>Already haven an account! <Link to='/signin' className='text-decoration-none text-blue-600 hover:text-blue-500 '>Sign in</Link></h4>
        {
            errorMessage && <h3 className='mt-5 text-red-600'>
              {errorMessage}
            </h3>
          }
      </div>

  </div>
        


      
   

</div>

   
  )
}
