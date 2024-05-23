import './App.css';
import React, {useState, useEffect} from 'react';
import { PomoProvider } from './components/PomoContext'
import MainPage from './components/MainPage';



function App() {
  return (
    <div className="App">
      <PomoProvider>
        <MainPage />
      </PomoProvider>
    </div>
  );
}

export default App;
