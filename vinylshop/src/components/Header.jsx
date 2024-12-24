import React from 'react';
import style from "./Header.module.css";


function Header(props) {
  return (
    <header>
      <div className={style.header_info_wrap}>
        <div class="container custom-container">
          <div className={style.rows}>
          <div class="row">
            <div class="col d-flex flex-row align-items-center">
              <img className = {style.logo_image} src={props.logo_img} alt="" />
              <div className={style.header_info}>
                ЛУЧШИЕ <br/> ПЛАСТИНКИ <br/> НА ВСЁМ УРАЛЕ
              </div>
            </div>
            <div class="col-2">

            </div>
            <div class="col d-flex flex-row align-items-center">
              <div className={style.header_info}>
              <img src={props.phone_log} alt="" />
                <a className = {style.header_integration} href='tel:88005553535'>8(800)5553535</a>
                <img src={props.split} alt="" />
                <button  className={style.header_integration}>
                <img src={props.user_i} alt="" />
                </button>
                <img src={props.split} alt="" />
                <button  className={style.header_integration}>
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