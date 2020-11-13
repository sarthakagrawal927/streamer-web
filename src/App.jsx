import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
