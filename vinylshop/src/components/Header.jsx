import React from 'react';
import "./Header.module.css";
import style from "./Header.module.css";
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <header>
      <div className={style.header_info_wrap}>
        <div class="container custom-container">
          <div className={style.rows}>
            <div id={style.logo_imaga} class="row animate__animated animate__backInLeft">
              <div class="col d-flex flex-row align-items-center col-xl-6 col-lg-6 col-md-5">
                <Link to="/main">
                  <img className={style.logo_image} src={props.logo_img} alt="" /></Link>
                <div className={style.header_info} id={style.site_title}>
                  ЛУЧШИЕ <br /> ПЛАСТИНКИ <br /> НА ВСЁМ УРАЛЕ
                </div>
              </div>
              <div class="col d-flex flex-row align-items-center col-lg-6">
                <div className={style.header_info} >
                  <img src={props.phone_log} alt="" />
                  <a className={style.header_integration} href='tel:88005553535'>8(800)5553535</a>
                  <img src={props.split} alt="" />
                  <Link to="/regauth">
                  <button className={style.header_integration}>
                    <img src={props.user_i} alt="" />
                  </button>
                  </Link>
                  <img src={props.split} alt="" />
                  <button className={style.header_integration}>
                    <img src={props.basket_i} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

