import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  const handleUpdate = () => setCount(prev => prev+1) 
  return (
    <button onClick={handleUpdate} data-testid= "button">
      {count}
    </button>
  );
}
export default App;
