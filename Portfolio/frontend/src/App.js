import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Sidebar from './Components/Sidebar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import About from './Pages/About';
import Footer from './Components/Footer';
import ContactForm from './Pages/Contact';

function App() {


 useEffect(()=>{
  AOS.init({
    duration:1000,
    easing:"ease-in-out",
    once:true,
    mirror:false
  })
 })
  return (
    <>
    <BrowserRouter>
    <div className="App">
           
    <Sidebar/>
    
    <Routes>
  
      <Route path='/' element={<Homepage/>}/>
   
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element = {<ContactForm/>}/>
    </Routes>
     </div>
       <Footer/>
    </BrowserRouter>
    </>
   
  );
}

export default App;
