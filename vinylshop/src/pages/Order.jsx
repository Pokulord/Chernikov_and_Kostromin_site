import React from 'react'
import style from "./Order.module.css";
import img from "../images/inproc.jpg";

function Order() {
  return (
    <div className={style.custom_container}>
      <div className={style.inprocess}>
        <img src={img} alt="" />
      </div>
    </div>

  )
}

export default Order