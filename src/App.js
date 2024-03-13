import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './routes/Register';
import Login from './routes/Login';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import HomePage from './routes/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<PageNotFound />} />  
        <Route path='/' element= {<HomePage />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
