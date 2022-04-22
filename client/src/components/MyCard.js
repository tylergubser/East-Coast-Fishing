import React from 'react'
import PinSVG from "./images/PinSVG.svg"
import ScaleSVG from "./images/ScaleSVG.svg"
import Fish2SVG from "./images/Fish2SVG.svg"
import WormSVG from "./images/WormSVG.svg"

function MyCard({userData}) {

  const {bait, caption, fishBreed, image, location, name, weight} = userData


  return (
      <div className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg "
          src={image}
          alt={`${name}'s ${fishBreed}`}
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Fisher
          </p>
          <p className="text-2xl font-bold text-white">{name}</p>
          <div className="mt-64">
            <div
              className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="text-sm text-white">
                {caption}
              </p>
              <dl className="flex items-center mt-6 space-x-4 text-sm text-white transition-all">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={PinSVG} alt="scale icom" className='w-4 h-4' />
                  <div class="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt class="underline">
                      Location
                    </dt>
                    <dd class="font-medium">
                      {location}
                    </dd>
                  </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0 ">
                  <img src={ScaleSVG} alt="scale icom" className='w-4 h-4 ' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Weight
                    </dt>
                    <dd className="font-medium">
                      {weight}
                    </dd>
                  </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={Fish2SVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Fish Caught
                    </dt>
                    <dd className="font-medium">
                      {fishBreed}
                    </dd>
                  </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={WormSVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Bait
                    </dt>
                    <dd className="font-medium">
                      {bait}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div >
      </div >
  )
}

export default MyCard