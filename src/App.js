import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Content /> 
      

    </div>
  );
}


export default App;