import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from './Widget';


function App() {
  return (
    //bem conventions
    <div className="app">
        

        {/* Sidebar */}
        <Sidebar/>

        {/* feed */}
        <Feed/>


        {/* Widget */}
        <Widget/>

    </div>
  );
}

export default App;
