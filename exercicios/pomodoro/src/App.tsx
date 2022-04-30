import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={8}
        shortRestTime={5}
        longRestTime={10}
        cycles={4}
      />
    </div>
  );
}

export default App;
