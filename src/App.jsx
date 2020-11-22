import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./context/userContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Showcase from "./pages/Showcase/Showcase";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";

import "./App.scss";

function App() {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    isSuper: false,
    college: " ",
  });
  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path='/' component={Showcase} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
