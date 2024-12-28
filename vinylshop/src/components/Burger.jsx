import React from 'react';
import Hamburger from 'hamburger-react';
import { useState, useRef } from 'react';
import style from "./Burger.module.css";
import { Link } from 'react-router-dom';
import c_img from "../images/cart_logo.png";
import u_img from "../images/user_logo.png"


function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger toggle={setOpen} toggled={open} />
      {open && <div className={style.burger_menu}>
        <Hamburger toggle={setOpen} toggled={open} />
        <main className={style.b_main}>
          <Link className={style.link_to} to="/catalog" onClick={(e) => setOpen(!open)}>Каталог</Link>
          <Link className={style.link_to} to="/about" onClick={(e) => setOpen(!open)}>О нас</Link>
          <Link className={style.link_to} to="/order" onClick={(e) => setOpen(!open)}>Доставка</Link>
          <div className={style.cart}>
          <Link className={style.link_to} to="/regauth" onClick={(e) => setOpen(!open)}>
          <img src={u_img} alt="" /></Link>
          </div>
          <div className={style.cart}>
            <img src={c_img} alt="" />
          </div>
          <div className={style.phone}>
            <a className={style.cart} href='tel:88005553535'>8(800)555-35-35</a>
          </div>
        </main>
      </div>}
    </div>
  )
}

export default Burger