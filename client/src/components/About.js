import React from 'react'
import Logo2 from "./images/Logo2.png"

function About() {
  return (
<section>
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src={Logo2}
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
        ></span>
        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
          Together, We Can Better Sport Fishing.
          </h2>
          <p class="mt-4 text-gray-600">
            Here at East Coast Fishing, to better sport fishing starts with a dedication to those who have a passion for fishing.
            Our app was born out of fishing enthusiasts who did not have a platform centered around sharing catches as well as a centeralized
            place to log all catches. By combining modern and elegant design with easy to use features, we hope to remain hyper-focused on our 
            mission to constantly improve the fishing experience for our users.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )

}

export default About