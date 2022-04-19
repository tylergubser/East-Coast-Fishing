import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js"
import Map from "./components/Map.js"
import Footer from "./components/Footer.js";
import NewCatch from "./components/MyCatch.js";
import { useAuth0 } from "@auth0/auth0-react";




function App() {

  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  console.log(isAuthenticated)
  return (
    <div className="mb-auto">
      <Navbar />

      <Switch>

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