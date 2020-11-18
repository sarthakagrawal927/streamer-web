
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./context/userContext";
import "./App.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Showcase from "./pages/Showcase/Showcase";
import "./App.scss";

function App() {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    isSuper: false,
  });
  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Showcase} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
