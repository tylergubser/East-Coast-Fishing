import React from 'react'
import MyCard from './MyCard'
import Profile from './images/Profile.jpg'
import Modal from './Modal.js'
import styled, { keyframes } from "styled-components";
import { fadeInUp } from 'react-animations'
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



function MyCatch() {
  const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeInUp}`}`;

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <main className="profile-page">
          <section className="relative block" style={{ height: "500px" }}>
            {/* this is the header picture, the user should be able to change the header to which ever they want */}
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"

              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="uppercase text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          {/* Connect */}
                          <Modal />
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            22
                          </span>
                          <span className="text-sm text-gray-500">Friends</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            10
                          </span>
                          <span className="text-sm text-gray-500">Catches</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            89
                          </span>
                          <span className="text-sm text-gray-500">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      {user.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      {user.email}
                    </div>
                    {/* <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Professional Fish Catcher
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    Hi everyone! im mr.whiskers! ive been fishing for as long as i can remember so i would consider myself pretty good at it! 
                    my favorite type of fish to catch, and eat, is salmon! [this section is for the user to add a little intro about themselves]
                  </div> */}
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          {/* card component */}
                          <FadeInUp>
                            <MyCard />
                          </FadeInUp>
                        </p>
                        <a
                          href="#pablo"
                          className="font-normal text-blue-400"
                          onClick={e => e.preventDefault()}
                        >
                          Edit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
      :
      <div >
        {/* <h2 class="text-2xl font-bold sm:text-3xl">Account Not Found</h2>
        <p class="mx-auto mt-4 text-gray-500">
          Please log in or sign up to view your profile and log your catches!
        </p>
        <NavLink to="/Login">
        <div
          href=""
          class="animate-bounce flex items-center justify-between px-5 py-3 mt-8  text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-200 group"
        >
          <span class=" hover:text-white text-lg font-medium group-hover:text-whiten">
            <NavLink to="/Login"> Go Fishing 🎣</NavLink>
          </span>
          <span
            class="flex-shrink-0 p-2 ml-4 bg-white border border-blue-600 rounded-full"
          >
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
        </NavLink> */}
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
                Please log in or sign up to view your profile and log your catches.
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
      </div>

  )
}

export default MyCatch