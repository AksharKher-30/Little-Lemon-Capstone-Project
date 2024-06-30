import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForms from './components/BookingForms'
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Main/>
        <Menu/>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
