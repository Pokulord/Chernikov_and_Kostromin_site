import React from 'react';
import style from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={style.about_wrapper}>
        <div class="container custom-container">
            <h1 className={style.boutus_title}>Мы - магазин, который существует на рынке с 2017 года</h1>
            <p className={style.boutus_text}>За это время мы:</p>
            <ul className={style.boutus_list}>
                <li>Продали свыше 2500 товаров!</li>
                <li>Получили много положительных отзывов</li>
                <li>Так и не нашли программиста!</li>
                <li>Заработали много денег!</li>
            </ul>
            <p className={style.boutus_text}>Адрес нашего магазина : г. Екатеринбург, проспект Вайнера, 23</p>
            <div className={style.map}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af157c7fc16a03b2f9ede61fcbcd93098394f51a601582b2edbb49051e2880597&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
        </div>
    </div>
  )
}

export default AboutUs