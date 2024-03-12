import React, { useState ,useEffect } from 'react'
import { Navbar,Footer } from './screens/index'
import { Provider } from './context/contextprovider'
import Home from './screens/comp/Home';
import { Outlet } from 'react-router-dom';
function App() {
  const [toggled,setToggled] =  useState(false);
  const ToggleHandler =()=>{
    toggled?setToggled(false):setToggled(true);
  }
  const [mode,setMode] = useState("light");
  const  ThemeHandler = ()=>{
    if(mode!=="dark"){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(mode);

  },[mode])
  return (
    <>
<Provider value={{mode,ThemeHandler ,ToggleHandler,toggled}} >
      <Navbar/>
     <div className=" lg:pt-16 pt-10  overflow-x-hidden">
     <Outlet/>
     </div>

      <Footer/>

     
</Provider>

     
      
    </>
  )
}

export default App
