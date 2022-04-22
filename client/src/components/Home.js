import React, {useEffect, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import NoAccount from './NoAccount';
import MyCard from "./MyCard"
import Loading from './Loading';
import Modal from './Modal.js'
import WeatherComponent from "./weather/Weather";



function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  const [usersData, setUsersDate] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/catches')
    .then(resp => resp.json())
    .then(data => setUsersDate(data))
  },[])

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated ? (
      <div>
        <div className="w-full flex flex-row flex-wrap">
          <div className="w-full bg-gray-100 h-screen flex flex-row flex-wrap justify-center ">

            {/* side navbar */}
            <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
              <div className='h-[50%]'>
                <div className="p-5 bg-white sticky top-0 flex-col justify-center items-center">
                  <img className="border border-indigo-100 shadow-lg rounded-[50%] mx-auto" src={user.picture} alt={user.name} />
                  <div className="pt-2 border-t border-b mt-5 w-full text-center text-xl text-gray-600">
                    {user.name}
                    <br />
                    {user.email}
                  </div>
                  <div className=" flex-col justify-center py-4 lg:pt-4 pt-8">
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Friends</span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Catches</span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
                    My Friends
                    <br />
                    <div className='justify-center gap-7 mt-6'>
                      <ul className='text-center flex justify-center items-center'>
                        <li className='flex justify-center gap-5 text-center'>
                          <img className="border border-indigo-100 shadow-lg rounded-[50%] w-10 h-10" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt={user.name} />
                          <h1>meow meow </h1>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of side navbar */}
            <div className="w-screen md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">

              {/* start of new catch form */}
              <div className="bg-gray-300 w-full shadow rounded-lg p-5 flex-col items-center">
              <WeatherComponent/>
              </div>
              
              {/* end of new catch form */}

              {/* start of card display */}
              <div className="mt-3 text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 ">
                  {usersData.map(userData => <MyCard userData={userData} key={user.id}/> )}
                </div>
              </div>
              {/* end of card display */}
            </div>
          </div>

        </div>
      </div>
    ) :
      <div>
        <NoAccount />
      </div>
  )
}

export default Home