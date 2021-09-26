import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Mainboard from "../src/container/mainboard"
import Review from "./container/Review"
import Register from "./container/Register"
import 'antd/dist/antd.css';
import {BrowserRouter, Route}  from "react-router-dom"

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  return (
    <div className="App">
          <BrowserRouter>
                <Route path="/" exact component={Mainboard}></Route> 
                <Route path="/review" component={Review}></Route>  
                <Route path="/register" component={Register}></Route>  
      </BrowserRouter>
    </div>
  )    
}

export default App;
