import React from 'react'
import PinSVG from "./images/PinSVG.svg"
import ScaleSVG from "./images/ScaleSVG.svg"
import Fish2SVG from "./images/Fish2SVG.svg"
import WormSVG from "./images/WormSVG.svg"

function MyCard() {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 p-10 ">
      {/* first card */}
      <div className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg "
          src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Fisher
          </p>
          <p className="text-2xl font-bold text-white">Vi Vo</p>
          <div className="mt-64">
            <div
              className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates doloremque
                reiciendis nostrum harum. Repudiandae?
              </p>
              <dl className="flex items-center mt-6 space-x-4 text-sm text-white transition-all">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={PinSVG} alt="scale icom" className='w-4 h-4' />
                  <div class="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt class="underline">
                      Location
                    </dt>
                    <dd class="font-medium">
                      Austin, TX
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
                      10 lbs.
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
                      Salmon
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
                      Worm
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div >
      </div >
      {/* second card */}
      <div className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg "
          src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Fisher
          </p>
          <p className="text-2xl font-bold text-white">Vi Vo</p>
          <div className="mt-64">
            <div
              className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates doloremque
                reiciendis nostrum harum. Repudiandae?
              </p>
              {/* fish info */}
              <dl className="flex items-center mt-6 space-x-4 text-sm text-white">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={PinSVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Location
                    </dt>
                    <dd className="font-medium">
                      Austin, TX
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
                      10 lbs.
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
                      Salmon
                    </dd>
                  </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={WormSVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Bait
                    </dt>
                    <dd class="font-medium">
                      Worm
                    </dd>
                  </div>
                </div>
              </dl>
              {/* end of fish info */}
            </div>
          </div>
        </div >
      </div >
       {/* third card */}
      <div className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg "
          src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Fisher
          </p>
          <p className="text-2xl font-bold text-white">Vi Vo</p>
          <div className="mt-64">
            <div
              className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates doloremque
                reiciendis nostrum harum. Repudiandae?
              </p>
              <dl className="flex items-center mt-6 space-x-4 text-sm text-white">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={PinSVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Location
                    </dt>
                    <dd className="font-medium">
                      Austin, TX
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
                      10 lbs.
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
                      Salmon
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
                      Worm
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div >
      </div>
       {/*  forth card */}
      <div className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg "
          src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Fisher
          </p>
          <p className="text-2xl font-bold text-white">Vi Vo</p>
          <div className="mt-64">
            <div
              className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates doloremque
                reiciendis nostrum harum. Repudiandae?
              </p>
              <dl className="flex items-center mt-6 space-x-4 text-sm text-white">
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <img src={PinSVG} alt="scale icom" className='w-4 h-4' />
                  <div className="sm:ml-3 mt-1.5 sm:mt-0">
                    <dt className="underline">
                      Location
                    </dt>
                    <dd className="font-medium">
                      Austin, TX
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
                      10 lbs.
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
                      Salmon
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
                      Worm
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div >
      </div >
    </div>
  )
}

export default MyCard