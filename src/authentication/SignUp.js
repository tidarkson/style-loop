import React from 'react'

function SignUp() {
  return (
    <>
        <section className='login w-screen h-screen flex items-center justify-center'>
          <div className='w-1/2'>
          <h3 className='text-3xl font-semibold text-slate-900 uppercase'>Create an account</h3>
            <form action="" className='flex flex-wrap gap-3'>
                <input type="text" placeholder='First name'className='flex-1 max-w-1/2 p-2'/>
                <input type="text" placeholder='Last Name'className='flex-1 max-w-1/2 p-2' />
                <input type="email" placeholder='email' className='flex-1 max-w-1/2 p-2'/>
                <input type="text" placeholder='username' className='flex-1 max-w-1/2 p-2'/>
                <input type="password" placeholder='password' className='flex-1 max-w-1/2 p-2'/>
                <input type="password" placeholder='Confirm password'className='flex-1 max-w-1/2 p-2' />
                {/* <input type="checkbox" /> */}
                <small>By creating an account, I consent to the processing of my data in accordance with the privacy policy</small>
                <button className='px-3 py-1 text-white font-semibold bg-red-800 w-full uppercase'>sign up</button>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignUp