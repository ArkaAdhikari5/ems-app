import React, { useState } from 'react'

const Login = ({handelLogin}) => {
  console.log(handelLogin)

    
   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')

  const submitHandeler = (e) =>{
    e.preventDefault()
    handelLogin(email,password)

    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
            submitHandeler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required 
          className='w-96 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input 
          value={password}
          onChange={(e)=>{
             setPassword(e.target.value)
          }}
          required 
          className='w-96 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='w-full mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 rounded-full placeholder:text-white'>Login</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
