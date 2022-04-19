import './App.css';
import {useState} from "react";

const ChangeColor = () => {
  const [newColor, setnewColor] = useState({
    color: 'red',
    bgColor: 'gold'
  });

  const changeBtnColorClick = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    setnewColor({...newColor, color: `rgb(${r} ${g} ${b})`})
    const collection = document.querySelectorAll('.firstBtn');
    collection[0].style.backgroundColor = newColor?.color;
    collection[1].style.backgroundColor = newColor?.color;
  }

  const changeBgColorClick = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    setnewColor({...newColor, bgColor: `rgb(${r} ${g} ${b})`})
    const collection = document.querySelectorAll('.First');
    collection[0].style.backgroundColor = newColor?.bgColor;
    collection[1].style.backgroundColor = newColor?.bgColor;
  }

  return <div className='App'>
    <div className="First">
      <input type="button" className='firstBtn' onClick={changeBtnColorClick} value={'click'}/>
    </div>
    <div className="First">
      <input type="button" className='firstBtn' onClick={changeBgColorClick} value={'click'}/>
    </div>
  </div>
}

function App() {
  return (
      <ChangeColor />
  );
}

export default App;
