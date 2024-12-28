import React from 'react'
import style from "./Main.module.css";
import img1 from "../images/95.png";
import img2 from "../images/Nikolay.png";
import img3 from "../images/Guar.png";
import new_year_img from "../images/new_year.png";
import new_LA from "../images/new_LA.png";
import adv_img from "../images/adv.jpg"; 


function Main() {
  return (
    <div className={style.main_wrapper}>
      <div class={style.custom_container}>
        <div className="row">
          <div className="col-xl-4 col-sm-12 col-12">
            <div className={style.left_section}>
              <div className={style.left_sect_title}>
                Причины стать нашим покупателем
              </div>
              <div className={style.left_images_sect}>
                <div className={style.left_sect_image}>
                  <img src={img1} alt="1312321" />
                </div>
                <div className={style.left_sect_image}>
                  <img src={img2} alt="1312321" />
                </div>
                <div className={style.left_sect_image}>
                  <img src={img3} alt="1312321" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-sm-12">
            <div className={style.right_sect}>
              <div className={style.right_sect_images}>
                <div className={style.r_sect_image}>
                <img src={new_year_img} alt="" />
                </div>
                <div className={style.r_sect_image}>
                <img src={new_LA} alt="" />
                </div>
                <div className={style.r_sect_image}>
                <img src={adv_img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main