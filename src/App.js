import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./pages/shop/Index"
import About_us from "./pages/about-us/Index"
import Contact_us from "./pages/contact-us/Index"
import Footer from './components/Footer/Footer';
import Email from './pages/sign-up/Email/Email';
import Home from './pages/home/index';
import ButtonContainer from './pages/sign-up/Button';
import Mobile from './pages/sign-up/MobileInputs/Index';
import WrapperContainer from './pages/sign-up/WrapperContainer';
import MidContainer from './pages/sign-up/MidContainer';
import Login from './pages/login/Login';
import ForgotPass from './pages/login/ForgotPassword/Index';
import Goals from "./pages/Goals/Goals"
import Goalsdetails from "./pages/Goals/GoalsDetail"
import { useDispatch, useSelector } from 'react-redux';
import UserLoggedIn from './redux/reducers/UserLoggedIn';
import { UserLoggedInAction } from './redux/actionCreates/UserLoggedInAction';
import { UserAction } from './redux/actionCreates/UserAction';
import { useEffect } from 'react';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  const state = useSelector( state => state.UserLoggedIn );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(UserLoggedInAction())
  //   dispatch(UserAction(true))
  // },[])
  return ( 
    <div className="App">  
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/about-us' element={<About_us />}></Route>
          <Route path='/contact-us' element={<Contact_us />}></Route>
          <Route path='/login' element={<WrapperContainer>
            {/* <Login/>   */}
            <ForgotPass/>
          </WrapperContainer>}></Route>
          <Route path='/sign-up' element={<WrapperContainer>
            <MidContainer/>
          </WrapperContainer>}>
            <Route index element={<ButtonContainer/>}></Route>
            <Route path="/sign-up/email" element={<Email/>}>
            </Route>
            <Route path="/sign-up/mobile" element={<Mobile/>}></Route>
            <Route path="/sign-up/email" element={<Email/>}></Route>
          </Route>
          <Route path='/goals' element={<Goals/>}>
            <Route path='/goals/goalsdetails' element={<Goalsdetails/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;