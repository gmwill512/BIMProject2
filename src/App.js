
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import BottomButtons from './BottomButtons.js'
import StackedBarChart from './StackedBarChart';


function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='title'>Distribution of Implant Sizes Estimated on Gonioscopy</div>
      <div className='dataContainer'>
        <StackedBarChart />
        {/* <BottomButtons /> */}
      </div>
    </div>
  );
}

export default App;


