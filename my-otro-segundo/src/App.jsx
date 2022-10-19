
import './App.css';
import {Routes,Route} from 'react-router-dom';
import React from 'react';

//Funx
import Home from './components/Home';
import Friends from './components/Friends';
import DaNav from './components/DaNav';

function App() {
  return (
    <React.Fragment>
      <>
      <DaNav />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/migos' element={<Friends />}></Route>
      </Routes>
      </div>
      </>
    </React.Fragment>
  );
}

export default App;
