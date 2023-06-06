import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

const [mode,setMode] = useState("light")
const [alert,setAlert] = useState(null)

const showAlert = (massage , type) => {
  setAlert({
    msg:massage,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}
 
const toggleMode=()=>{
  if(mode==="light"){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled","success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","success")
  }
}

  return (<>
    <Navbar title="WordWizard" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>);
} 

export default App;
