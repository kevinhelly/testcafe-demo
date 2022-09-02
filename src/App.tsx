import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [test, setTest] = useState('');
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {test}
        </a>
      </header>
      <input
        id='text-input'
        type='text'
        value={test}
        onChange={(event) => setTest(event.target.value)}
        max={10}
      />
    </div>
  );
}

export default App;
