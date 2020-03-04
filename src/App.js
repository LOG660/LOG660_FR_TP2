import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationMenu'
import './styles/App.scss';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
