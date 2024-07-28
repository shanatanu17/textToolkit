// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components1/About';
import Navbar from './components1/Navbar';

import TextForms from './components1/TextForms';
import Alert from './components1/Alert';
import{
  BrowserRouter,
  Routes,
  Route

}from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const displayalert = (message,type)=>{
    setAlert({
      message : message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const changethemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(6,28,114)';
      document.body.style.color='white';

      displayalert("Dark mode has been enable","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      displayalert("light mode has been enable","success");
    }
  }
  return (
    <>


<BrowserRouter>



<Navbar  title="Textutils"  Home11 = "About" mode={mode} changethemode={changethemode}/>
<Alert alert={alert}/>


<div className="container my-3" >

   <Routes>
 
        <Route exact path="/about" element={<About  mode={mode}/>}></Route>

         <Route exact path="/" element={<TextForms   displayalert={displayalert} heading = "Enter the text to Analyze" />}></Route>

    </Routes>
    </div>

</BrowserRouter>


{/* <TextForms   displayalert={displayalert} heading = "Enter the text to Analyze" /> */}
{/* <About mode={mode} /> */}








        



    
</>
  );
}

export default App;
