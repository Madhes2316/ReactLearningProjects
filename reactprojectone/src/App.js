import './App.css';
import Colorbox from './Colorbox';
import Colorinput from './Colorinput';
import { useState } from 'react';


function App() {

  const [color,setColor] = useState('');
  const [isDarkColor ,setIsDarkColor] = useState(true);
  const [hexValue, setHexValue] = useState(null)


  function handleText(e){
    e.preventDefault();
    if(isDarkColor === false){
    setIsDarkColor(true);
    }
    else{
      setIsDarkColor(false);
    }
  }



  return (
    <div className="mainDiv">
      <Colorbox 
      boxColor = {color}
      isDarkColor = {isDarkColor}
      hexValue = {hexValue}
      />
      <Colorinput 
       color = {color}
       setColor = {setColor}
       setHexValue = {setHexValue}
       handleText = {handleText}
      />
    </div>
  );
}

export default App;
