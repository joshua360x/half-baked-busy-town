import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';
import { useState } from 'react';

function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  const [lightColor, setLightColor] = useState('red');
  // lizardSize should be a number that starts out as 10
  const [lizardSizeCount, setLizardSizeCount] = useState(3);
  // alienSize should be a number that starts out as 10
  const [alienSizeCount, setAlienSizeCount] = useState(3);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  const [vehicleArr, setVehicleArr] = useState(['car', 'truck']);


  function handleLizardBigger() {
    setLizardSizeCount(lizardSizeCount + 1);
  }

  function handleLizardSmaller() {
    setLizardSizeCount(lizardSizeCount - 1);
  }

  function handleAlienBigger() {
    setAlienSizeCount(alienSizeCount + 1);
  }

  function handleAlienSmaller() {
    setAlienSizeCount(alienSizeCount - 1);
  }

  function handleColorRed() {
    setLightColor('red');
  }

  function handleColorYellow() {
    setLightColor('yellow');
  }
  function handleColorGreen() {
    setLightColor('green');
  }

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" width={alienSizeCount * 10} />
          <div className='buttons'>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleAlienBigger}>Oh no! The alien is gobblin up all the electricity!</button>
            {/* when you click this button, the lizard's size in state should go down by one */}
            <button onClick={handleAlienSmaller}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" width={lizardSizeCount * 10} />
          <div className="buttons">
            {/* when you click this button, the lizard's size in state should go up by one */}
            <button onClick={handleLizardBigger}>Yegads! The lizard is ramping up to its final form!</button>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleLizardSmaller}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick={handleColorRed}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick={handleColorYellow}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick={handleColorGreen}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehicles={vehicleArr} />
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button>Truck</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

