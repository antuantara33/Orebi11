import React, { useState } from 'react'
import Container from '../components/Container'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const  [registrationData,setRegistrationData] =useState({
        firstname:"",
         lastname:"",
          email:"",
          password:"",
    })
    const [show,setShow] = useState(false)
    const [error,setError]= useState("")
    const handleClick = ()=>{
       setShow(!show)
        
    }
    const handleChange =(e)=>{
       setRegistrationData({...registrationData,[e.target.name]:e.target.value})
        
       }
       const handleRegistration =()=>{
        console.log(registrationData);
        const email = registrationData.email
        const password = registrationData.password
        createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {

  console.log(user);
  toast.success("Registration successfully done" )
  setTimeout(() => {
    navigate("/login")
  }, 2000);
  
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
   if(errorCode.includes("auth/email-already-in-use")){
    setError("This email already used" )
   }
   
  });

        
       }
  return (
    <div className="">
        <Container>
                <ToastContainer 
                     
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick={false}
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
           //transition={Bounce}
              />
            <div className="">
                <h2 className='font-bold  text-[30px]'>Registration</h2>
               {
                error &&(
                     <p className='bg-pink-300 text-white px-4 py-2 w-[400px]'>{error}</p>
                )}
               
            </div>
            <div className="my-5">
                     <div className=" flex flex-col">
         <label className='my-2'>FirstName</label>
        <input
        onChange={handleChange}
        value={registrationData.firstname}
         name='firstname'
        className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur firstname'/>
            </div>
               <div className=" flex flex-col">
         <label className='my-2'>LastName</label>
        <input
         onChange={handleChange}
           value={registrationData.lastname}
        name='lastname'
         className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur lastname'/>
            </div>
           <div className=" flex flex-col">
         <label className='my-2'>Email</label>
        <input
         onChange={handleChange}
           value={registrationData.email}
        name='email'
       className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur email'/>
            </div>
             <div className="relative flex flex-col w-[400px]">
         <label className='my-2'>password</label>
        <input
         onChange={handleChange}
           value={registrationData.password}
        name='password'
       className='w-[400px] py-2 px-3 border-2 rounded' type={show ?"text":"password"} placeholder='please give ur password'/>
       <div className="absolute top-[50px] right-[20px]">

        {
        show ? <FaEyeSlash  onClick={handleClick}/>
        :
           < FaEye onClick={handleClick}/>
        }
    
       </div>
            </div>
            <div className="my-5">
                <button onClick={handleRegistration} className='bg-primary text-white px-4 py-2 rounded'>Submit</button>
            </div>

            </div>
        </Container>
    </div>
  )
}

export default Registration