import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.d3.select('.graph-box').append("p").text("Hello World!");
  }, [])
  return (
    <div className="App">
      <div className="graph-box"></div>
    </div>
  );
}

export default App;
