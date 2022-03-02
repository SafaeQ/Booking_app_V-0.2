import React from 'react';
import { Home} from './components/Home'
import { Login} from './components/Login'
import { Signup} from './components/Signup'
import { Routes, Route,Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello in React!</h1>
              <Link to='/'>Home</Link>&nbsp;
              <Link to='/login'>Login</Link>&nbsp;
              <Link to='/signup'>Register</Link>&nbsp;
              <br /><hr />
          <Routes>
              <Route path="/" element={<Home/>}/>

              <Route path="/login" element={<Login/>}/>

              <Route path="/signup" element={<Signup/>}/>

          </Routes>
    </div>
  );
  
}

export default App;
