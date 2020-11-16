import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Showcase from "./pages/Showcase/Showcase";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Showcase} />
                    {/* <Route
                        exact
                        path='/home'
                        render={() => <Home child={Dashboard} />}
                    />
                    <Route
                        exact
                        path='/logout'
                        render={() => <Home child={Logout} />}
                    /> */}
                    <Route exact path='/home' component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
