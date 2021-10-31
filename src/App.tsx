import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Mainboard from "./container/Mainboard"
import Review from "./container/Review"
import Privacy from "./container/Privacy"
import Register from "./container/Register"
import SignIn from "./container/SignIn"
import Clause from "./container/Clause"
import Profile from "./container/Profile"
import Home from "./container/Home"
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from "react-router-dom"
import { initializeApp } from 'firebase/app';



declare global {
  interface Window {
    kakao: any;
  }
}

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrtytxoNGDcN8cXnkmTsrJZgWcSRxECQ",
  authDomain: "wheretoeat-bbcd3.firebaseapp.com",
  projectId: "wheretoeat-bbcd3",
  storageBucket: "wheretoeat-bbcd3.appspot.com",
  messagingSenderId: "1001353406974",
  appId: "1:1001353406974:web:8bd3ade3d2abf51f8b38af",
  measurementId: "G-2VGZE372M7"
};


const app = initializeApp(firebaseConfig);

function App() {


 





  return (
    <div className="App" style={{height: `${window.innerHeight + "px"}`}}> 
      <BrowserRouter>
      <Route path="/" exact component={Mainboard}></Route>
        <Route path="/review/:id" component={Review}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/register/:id" component={Register}></Route>
        <Route path="/signIn" exact component={SignIn}></Route>
        <Route path="/privacy" exact component={Privacy}></Route>
        <Route path="/clause" exact component={Clause}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
