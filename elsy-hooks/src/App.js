import {useState} from "react"
import Box from './components/Box'
import './global.css'


function App() {
  var tempMin = -20
  var tempMax = 40
  var heartMin = 80
  var heartMax = 180
  var stepsMin = 0
  var stepsMax = 50000
  
  var [water, setWater] = useState(0)
  var [heart, setHeart] = useState(120)
  var [temp, setTemp] = useState(-10)
  var [steps, setSteps] = useState(3000)
  

  var calculateWater = () =>{
    var total = 1.5;
    if(temp >= 20){
      var temperature = temp - 19
      for(var i=temperature; i!==0; i--){
        total+= 0.02
      }
    }
    if(heart >= 120){
      var coeur = heart - 19
      for(var i=coeur; i!==0; i--){
        total+= 0.0008
      }
    }
    if(steps>= 120){
      var pas = steps - 19
      for(var i=pas; i!==0; i--){
        total+= 0.00002
      }
    }

    total = total.toFixed(3)
    console.log(total)
    setWater(total)
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Box value={water} icon="local_drink" color="#3A85FF" unit="L"/>
          <Box min={stepsMin} max={stepsMax} value={steps} changeVal={setSteps} change={calculateWater} icon="directions_walk" color="black" unit="Steps"/>
          <Box min={heartMin} max={heartMax} value={heart} changeVal={setHeart} change={calculateWater} icon="favorite" color="red" unit="BPM"/>
          <Box min={tempMin} max={tempMax} value={temp}  changeVal={setTemp} change={calculateWater} icon="wb_sunny" color="yellow" unit="°C"/>
        </div>
      </div>
    </div>
  );
}

export default App;
