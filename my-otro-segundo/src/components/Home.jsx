import React from 'react';
import logo from './logo.svg';


function Home() {
  return (
    <React.Fragment>
        <div style={{textAlign:"center"}}>
            <h3>Home</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                We in dis piece!
            </p>
        </div>


    </React.Fragment>
  )
}

export default Home