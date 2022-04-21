import React from 'react'
import LoginButton from './LoginButton.js';


function Login() {


  return (


    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Go Fishing Today!</h1>
          <p className="mt-4 text-gray-500">
            Log in or Sign up to view the latest catch amoung fishing enthusiasts and share your latest catch!
          </p>
        </div>
        <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div className="flex items-center justify-center">
            <div
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-400 rounded-lg"
            >
              <LoginButton />
            </div>
          </div>
        </form>
      </div>
      <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-screen">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1529230117010-b6c436154f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </section>
  )
}

export default Login