import React from 'react'
import style from "./Catalog.module.css";
import VinylCard from '../components/VinylCard';
import c_img1 from "../components/images/smiths.jpg";
import c_img2 from "../components/images/radiohead.jpg";
import c_img3 from "../components/images/weezer.jpg";

function Catalog() {
  return (
    <div className={style.catalog_wrapper}>
      <div class="container custom-container">
        <div className="row">
          <div class="col-xl-3 col-md-12">
            <div className={style.search_section}>
              <div class={style.sect_title}>Поиск по каталогу</div>
              <div className={style.search_rect}></div>
              <form className={style.search_form} action="#">
                <label >Исполнитель</label>
                <input className={style.search_input} name="artist" type="text" />
                <label >Альбом</label>
                <input className={style.search_input} name="alb" type="text" />
                <label >Год выпуска</label>
                <input className={style.search_input} id={style.last_upper_search} name="product_year" type="text" /> <br />
                <label >Цена</label>
                <div className={style.search_price_sect}>
                  <input type="text" className={style.price_limits} name="first_price_lim" placeholder="От" />
                  <input type="text" className={style.price_limits} name="second_price_lim" placeholder="До" />
                </div>
                <input className={style.search_but} type="submit" value="Искать пластинку" />

              </form>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-8">
                <p className={style.catalog_cards_title}>Каталог</p>
              </div>
              <div className="col">
                <div className={style.sort_sect}>
                  <p className={style.sorted_title}>Сортировка</p>
                  <select name='sort_type' className={style.sort_select}>
                    <option value="novice_sort" selected className="placeholder-option">по новизне</option>
                    <option value="year_sort">по году выхода</option>
                    <option value="price_sort">по цене</option>
                  </select>
                </div>

              </div>
            </div>
            
          <div className={style.vinyl_grid}>
            <VinylCard img = {c_img1} card_text="The Smiths - The Queen is Dead" price="5500"/>
            <VinylCard img = {c_img2} card_text="Radiohead - The Bends" price="7500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
            <VinylCard img = {c_img3} card_text="Weezer - Blue album" price="4500"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog