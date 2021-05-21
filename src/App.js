import React from 'react';
import './App.css';
import LengthText from './components/LengthText';
import ListArray from './components/ListArray';
import LoginFrom from './components/LoginFrom';

function App() {
  return (
    <div className='App'>
      <LengthText
        text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
        maxLength={35}
      />
      <ListArray />
      <LoginFrom />
    </div>
  );
}

export default App;
