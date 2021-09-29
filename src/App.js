import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AtmosNavbar from './components/Navbar';
import MainMenuPage from './pages/MainMenuPage'
import { Route, Switch, Redirect } from "react-router-dom"
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/menu" />
            </Route>
            <Route path="/menu">
                <MainMenuPage />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default App;