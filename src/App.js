import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import TextArea from './components/TextArea';


function App() {

  const [result, setResult] = useState('');
  return (
    <div>
      <Navbar/>
      <Heading/>
      <TextArea result={result} setResult={setResult}/>
    </div>
  );
}

export default App;
