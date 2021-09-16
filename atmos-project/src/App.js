import React from 'react';
// import AtmosNavbar from './components/Navbar';
import Menu from './components/Menu'

function App() {
    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                <h1>Dashboard</h1>
                <Menu text="Please select your content" />
            </div>

        </div>
    )
}

export default App;