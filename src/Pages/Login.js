import React from 'react'
// import image from "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

function Login() {
  return (
    <>
            <section className='login w-screen h-screen flex items-center justify-center'>
          <div className='w-1/4'>
          <h3 className='text-3xl font-semibold text-slate-900 uppercase'>Sign in</h3>
            <form action="" className='flex flex-col gap-3'>
                <input type="text" placeholder='enter email or username'className='flex-1 max-w-1/2 p-2'/>
                <input type="password" placeholder='password' className='flex-1 max-w-1/2 p-2'/>
                <button className='px-3 py-1 text-white font-semibold bg-red-800 w-full uppercase'>sign in</button>
                <a href="" className='uppercase'>forgot password?</a>
            <a href="" className='uppercase'>create a new account</a>
            </form>         
          </div>
          <div>
            {/* <img src={image} alt="" /> */}
          </div>
        </section>
    </>
  )
}

export default Login