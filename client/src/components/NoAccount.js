import React from 'react'

function NoAccount() {
  return (
    <section class="relative bg-white">
          <img
            class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
            src="https://images.unsplash.com/photo-1493787039806-2edcbe808750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Guy fishing in a lake"
          />
          <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>
          <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                Let's
                <strong class="font-extrabold text-blue-600 sm:block">
                  Go Fishing.
                </strong>
              </h1>

              <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                Please log in or sign up to for an immersive experience.
              </p>

              <div class="flex flex-wrap gap-4 mt-8 text-center">

                <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring" href="/Login">
                  Get Started
                </a>

                <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-blue-600 sm:w-auto hover:text-blue-700 active:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring" href="/about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}

export default NoAccount