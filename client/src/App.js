import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js"
import Map from "./components/Map.js"
import Footer from "./components/Footer.js";
import NewCatch from "./components/MyCatch.js";
import Profile from "./components/Profile.js"
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react"



function App() {

  const { user, isAuthenticated } = useAuth0();
  const [isUser, setIsUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(user)
  console.log(isAuthenticated)

  useEffect(() => {

    if (isAuthenticated) {

      fetch(`http://localhost:3000/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: user.given_name,
          last_name: user.family_name,
          username: user.nickname
          }),
        }) 
        .then((r) => r.json())
        .then((data) => setIsUser(data));

      }


  },[user])




  return (
    <div className="mb-auto">
      <Navbar isAuthenticated={isAuthenticated}/>

      <Switch>
        <Route exact path="/Profile">
          <Profile/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>
        <Route exact path="/NewCatch">
          <NewCatch />
        </Route>

      </Switch>

    <Footer />
    </div>
  );
}

export default App;