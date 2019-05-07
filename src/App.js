import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <article>
        {/* <Hello message="React"/>
        <Hello message="JSX"/>
        <Hello message="Facebook"/> */}


        <Counter text="Count"/>
        <Counter text="Value"/>

        

      </article>

    </div>
  );
}

export default App;
