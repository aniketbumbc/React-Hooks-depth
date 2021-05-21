import React from 'react';
import './App.css';
import LengthText from './components/LengthText';

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
    </div>
  );
}

export default App;
