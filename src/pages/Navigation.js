import React, { useEffect } from 'react';
import { useUserContext } from '../UseContext';
import Navbar2 from '../component/login/Navbar2';
import Navbar from '../component/login/Navbar';

function Navigation() {
  let currentUrl = window.location.href;
useEffect(()=>{
  if (currentUrl === "http://mid.tachyon.net.id/api/login") {
    
  return <Navbar2/>;
}else{
  return <Navbar/>
}
},[])
const { isLoggedIn } = useUserContext();
}

export default Navigation;


const [navbar , setNavbar] = useState();
let currentUrl = window.location.href;
useEffect(() => {
  
  if (currentUrl === `http://localhost:3000`) {
    setNavbar(<Navbar/>)
  } else {
    setNavbar(<Navbar2 />);
  }
}, [currentUrl]);    
  {navbar}
