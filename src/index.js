import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Student from './Student';
import StudentDetail from './StudentDetail';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Student' element={<Student/>}></Route>
      <Route path='/Student/:id' element={<StudentDetail/>}></Route>
      <Route path='/Student/add' element={<AddStudent/>}></Route>
      <Route path='/Student/edit/:id' element={<EditStudent/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);

