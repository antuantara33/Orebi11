import React, { useState } from 'react'
import Container from '../components/Container'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
       const auth = getAuth()
    const  [loginData,setLoginData] =useState({
       
          email:"",
          password:"",
    })
    const [show,setShow] = useState(false)
    const [isDark,setIsDark] = useState(false)
    const handleClick = ()=>{
       setShow(!show)
        
    }
    const handleChange =(e)=>{
       setLoginData({...loginData,[e.target.name]:e.target.value})
        
       }
       const handlelogin=()=>{
        const email=loginData.email
        const password = loginData.password
     
signInWithEmailAndPassword(auth, email, password)
  .then(() => {
   
   
   toast.success("login Successfully Done")

   
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
  
    toast.error(errorCode);
    
  });
        
       }
  return (
    
<div className={`${isDark ? "light" : "dark"}`}>
  <div className="ml-[200px]">
    <p onClick={()=>setIsDark(!isDark)}>
      {
        isDark ? "light":"dark"
      }
    </p>
  </div>
      <div className="py-10 font-dm dark:bg-black dark:text-white">
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
                <h2 className='font-bold  text-[30px]'>Login</h2>
            </div>
            <div className="my-5">
       
           <div className=" flex flex-col">
         <label className='my-2'>Email</label>
        <input
         onChange={handleChange}
           value={loginData.email}
        name='email'
       className='w-[400px] py-2 px-3 border-2 rounded' type="text" placeholder='please give ur email'/>
            </div>
             <div className="relative flex flex-col w-[400px]">
         <label className='my-2'>password</label>
        <input
         onChange={handleChange}
           value={loginData.password}
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
                <button onClick={handlelogin} className='bg-primary text-white px-4 py-2 rounded'>Submit</button>
            </div>

            </div>
        </Container>
    </div>
</div>
  )
}

export default Login;