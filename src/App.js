import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Navbar from './Component/layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Component/pages/NotFound';
import AddUsers from './Component/users/AddUsers';
import EditUsers from './Component/users/EditUsers';
import UserView from './Component/users/UserView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="users/add" element={<AddUsers/>}/>
          <Route path='users/edit/:id' element={<EditUsers/>}/>
          <Route path='users/UserView/:id' element={<UserView/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Route>

      </Routes>
    </BrowserRouter>

      
);
}

export default App;
