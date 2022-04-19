import React from 'react'
import { NavLink } from "react-router-dom";
// import loginSVG from "./images/loginSVG.svg"
// import homeSVG from "./images/homeSVG.svg"
import mapSVG from "./images/mapSVG.svg"
import hookSVG from "./images/hookSVG.svg"
import fishSVG from "./images/fishSVG.svg"
import fishingSVG from "./images/fishingSVG.svg"


function Navbar() {
    return (
        <header class="shadow-sm">
            <div
                class="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto"
            >
                <div class="flex flex-1 w-0 lg:hidden sm:text-center">
                <NavLink to="/">East Coast Fishing Co.</NavLink>
                   
                </div>

                <div class="flex items-center space-x-4">

                    <form class="hidden mb-0 lg:flex">
                    <NavLink to="/">East Coast Fishing Co.</NavLink>
                    </form>
                </div>

                <ul
                    class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                >
                  
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={mapSVG} alt="home icon" className="w-6 h-6 mr-3" />
                            <NavLink to="/Map">Map</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={fishingSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/NewCatch">My Catches</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/About">About</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={fishSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/Login">Login</NavLink>
                        </div>
                    </li>

                </ul>

                
            </div>
            
            {/* mobile view */}
            <div class="border-t border-gray-100 lg:hidden">
                <ul
                    class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
                >
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={mapSVG} alt="home icon" className="w-6 h-6 mr-3" />
                            <NavLink to="/Map">Map</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={fishingSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/NewCatch">New Catch</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/About">About</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={fishSVG} alt="home icon" className="w-6 h-6 mr-3 " />
                            <NavLink to="/Login">Login</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
            {/* end ofmobile view */}
        </header>
    )
}

export default Navbar