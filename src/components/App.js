import React from 'react';

import './App.css';
import WheelTypeSelector from './WheelTypeSelector';
import TimerArea from './TimerArea';
import ResetButton from './ResetButton';

function App() {
  return (
    <div className="App">
      <main>
        <WheelTypeSelector />
        <TimerArea />
        <ResetButton />
      </main>
      <footer>
        <p>Created by Tim Millard</p>
        <p>Learn more about the <a href="https://en.wikipedia.org/wiki/Dethridge_wheel">Dethridge Wheel</a></p>
    </footer>
    </div>
  );
}

export default App;
