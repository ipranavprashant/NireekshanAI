// import { useState, useEffect } from "react"
import './App.css'
import ChatAI from './components/ChatAI'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Statistics from './components/Statistics'
// import CircularIcon from './components/CircularIcon';

// import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  // const [count,setCount]=useState(0);
  //  useEffect(()=>{
  //     const interval=setInterval(()=>{
  //       setCount(count=>count+1);
  //     },1000)

  //     return ()=>{
  //       clearInterval(interval);
  //     }
  //   },[])

  return (
    <div>
      <Navbar />
    {/* <BrowserRouter> */}
      {/* <Routes> */}

    <ChatAI />
      <Statistics />
        <Sidebar />
        {/* </Routes> */}
    {/* </BrowserRouter> */}
    </div>
  )
}

export default App
