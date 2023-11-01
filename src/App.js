import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { useEffect, useState } from 'react';
import { Auth, auth } from './firebase';

function App() {

  const [userName, setUserName]= useState("");
useEffect(()=>{
auth.onAuthStateChanged(user=>{
  console.log(user)
  if(user){
    setUserName(user.displayName)
  }else setUserName("");
});
},[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home name={userName}/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/signup' exact element={<Signup/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
