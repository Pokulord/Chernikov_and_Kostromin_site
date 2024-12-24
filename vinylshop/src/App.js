
import './App.css';
import Header from './components/Header';
import logo_img from "./images/upper_sect_logo_2.png";
import { Routes, Route } from "react-router-dom";
import phone_logo from "./images/phone_logo.png";
import split_rect from "./images/split_rect.png";
import user_icon from "./images/user_logo.png";
import basket_icon from "./images/cart_logo.png";
import Navigation from './components/Navigation';
import Catalog from './pages/Catalog';


function App() {
  return (
    <>
        <Header logo_img={logo_img} phone_log = {phone_logo} split = {split_rect} user_i = {user_icon} basket_i = {basket_icon}/>
        <div class="container custom-container">
        <Navigation/>
        <Routes>
          <Route path="/catalog" element={<Catalog/>}></Route>
        </Routes>
        </div>
    </>

  );
}

export default App;
