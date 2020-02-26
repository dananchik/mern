import React from 'react';

import './App.css';
import Form from "./components/Form";
import {createStore} from 'redux';
import Post from './components/Post';
import AppNavbar from "./components/AppNavbar";
//const store = createStore();

function App() {
  return (
    <div className="App">
        <AppNavbar/>
      <Form method="post"/>
      <Post/>
    </div>
  );
}

export default App;
