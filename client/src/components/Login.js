import React from 'react'
import LoginButton from './LoginButton.js';


function Login() {

 
  return (
   

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get Fishing Today!</h1>

      <p className="mt-4 text-gray-500">
        Log in or Sign up to view the latest catch amoung fishing enthusiasts and share your latest catch!
      </p>
    </div>

    <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
    <div className="flex items-center justify-center">
        <div
          className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-400 rounded-lg"
        >
          
         <LoginButton/>
         
        </div>
      </div>
      {/* <div>
        <label for="user name" class="sr-only">User Name</label>
        <div class="relative">
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter Username"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
          </span>
        </div>
      </div> */}

      {/* <div>
        <label for="password" class="sr-only">Password</label>
        <div class="relative">
          <input
            type="password"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter password"
          />

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div> */}

      
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