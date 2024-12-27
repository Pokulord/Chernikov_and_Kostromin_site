import React from 'react';
import style from "./VinylCard.module.css";
import cart_img from "./images/cart_icon.png";

function VinylCard(props) {
  return (
    <div className={style.card}>
       <div className={style.card_image}>
            <img src={props.img} alt="" />
        </div> 
        <div className={style.card_text}>{props.card_text}</div>
        <div className={style.card_price_sect}>
            <div className={style.price}>{props.price} ₽</div>
            <button className={style.buy_but}>
                <img src={cart_img} alt="" />
            </button>
        </div>
    </div>
  )
}

export default VinylCard