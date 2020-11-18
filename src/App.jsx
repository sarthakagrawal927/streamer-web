import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Showcase from "./pages/Showcase/Showcase";
import "./App.scss";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Showcase} />
                    <Route exact path='/home' component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
