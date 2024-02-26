import React, { useState } from 'react';
import Product from './components/Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Create from './components/Create';

const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product setId={setId} />} />
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;