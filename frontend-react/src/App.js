import React from 'react';
import { Home} from './components/Home'
import { Login} from './components/Login'
import { Signup} from './components/Signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>authentication</h1>
      <Home/>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
