import React, { useEffect } from 'react';
import ComingSoon from './components/ComingSoon';
import './assets/fonts.css';

function App() {
  useEffect(() => {
    // Update page title to Swedish
    document.title = "MY EVENT - Kommer Snart";
  }, []);

  return (
    <ComingSoon />
  );
}

export default App;