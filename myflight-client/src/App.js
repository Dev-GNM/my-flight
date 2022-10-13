import './App.css';
import { Routes, Route } from 'react-router-dom'
import Airlines from './components/Airlines/Airlines'
import Airline from './components/Airline/Airline'
// import Navlink from './components/Navlink';
// import Slider from './components/Slider';


function App() {
  return (
    <Routes>
<Route exact path="/" component={Airlines}/>
<Route exact path="/airlines/:slug" component={Airline}/>
    </Routes>
  )
}

export default App;
