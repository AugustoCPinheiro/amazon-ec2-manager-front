import React from 'react';
import './App.css';
import Header from './components/Header';
import InstancePage from './pages/InstancesPage.page';

// const queryCache = QueryCache();

function App() {
  return (
    <div className="App">
      <Header />
      <InstancePage />
    </div>
  );
}

export default App;
