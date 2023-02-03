import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./pages/shop/Index"
import About_us from "./pages/about-us/Index"
import Contact_us from "./pages/goals/contact-us/Index"
import Login from "./pages/login/Index"
import Sign_Up from "./pages/sign-up/Index"
import Footer from './components/Footer/Footer';
import Email from './pages/sign-up/Email/Email';
import Home from './pages/home/index';
import ButtonContainer from './pages/sign-up/Button';
import Mobile from './pages/sign-up/MobileInputs/Index';

import { useState } from 'react';
import Goals from './pages/goals/goals';
// import Goals from './pages/goals/Goals';


function App() {
  const [isUser,setIsUser] = useState(true); 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/about-us' element={<About_us />}></Route>
          <Route path='/contact-us' element={<Contact_us />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/goals' element={<Goals/>}></Route>

          <Route path='/sign-up' element={<Sign_Up isUser={isUser}/>}>
            <Route index element={<ButtonContainer isUser={isUser} setIsUser={setIsUser}/>}></Route>
            <Route path="/sign-up/email" element={<Email/>}></Route>
            <Route path="/sign-up/mobile" element={<Mobile/>}></Route>
            

               
            {/* <Route path="/sign-up/email" element={<Email/>}></Route> */}
            {/* <Route path="/goal-up/goal" element={<Goal/>}></Route> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
