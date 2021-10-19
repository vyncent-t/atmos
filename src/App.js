import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AtmosNavbar from './components/Navbar';
import MainMenuPage from './pages/MainMenuPage'
import { Route, Switch } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Intropage from './pages/Intropage';

const code = new URLSearchParams(window.location.search).get('code')
function App() {
    return (
        <Switch>
            {/* <Route path="/" exact>
                <Redirect to="/welcome" />
            </Route> */}
            <Route path="/" exact>
                <Intropage />
            </Route>
            <Route path="/menu">
                <AtmosNavbar />
                <MainMenuPage />
            </Route>
            <Route path="/dashboard">
                <AtmosNavbar />
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default App;
