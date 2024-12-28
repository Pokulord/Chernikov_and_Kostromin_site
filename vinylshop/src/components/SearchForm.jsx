import React from 'react';
import style from "./Search.module.css";
import { useState, useRef } from 'react';


var search_flags


function SearchForm() {
    const [author, setAu] = useState('');
    const [year, setYear] = useState('');
    const [album, setAlb] = useState('');
    const [price, setPrice] = useState('');
    const [price2, setPrice2] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (/^(0|[1-9]\d*)$/.test(price) && /^(0|[1-9]\d*)$/.test(price2) && /^(0|[1-9]\d*)$/.test(year)) {
            if (price.trim() != '' && price2.trim() != '') {
                if (Number(price) > Number(price2) ) {
                    setError('Значение нижнего диапазона цены не может быть выше верхнего!');
                }
                else {
                    setError('');
                    alert(`Успешная отправка! \n Исполнитель ${author} \n Альбом ${album} \n Год ${year} \n Цена1 ${price} \n Цена2 ${price2} `);
                }
            }
        }
        else {
            setError("Вводимые цены и год выпуска должны быть десятичными числами и больше 0 ");
        }
    }
    return (
        <form className={style.search_form} onSubmit={handleSubmit}>
            <label >Исполнитель</label> <br />
            <input className={style.search_input} name="artist" type="text" onChange={(e) => setAu(e.target.value)} /> <br />
            <label for="alb" >Альбом</label> <br />
            <input id="alb" className={style.search_input} name="alb" type="text" onChange={(e) => setAlb(e.target.value)} /> <br />
            <label >Год выпуска</label> <br />
            <input className={style.search_input} id={style.last_upper_search} name="product_year" type="text" onChange={(e) => setYear(e.target.value)} /> <br />
            <label >Цена</label> <br />
            <div className={style.search_price_sect}>
                <input type="text" value={price} className={style.price_limits} name="first_price_lim" placeholder="От" onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={price2} className={style.price_limits} name="second_price_lim" placeholder="До" onChange={(e) => setPrice2(e.target.value)} />
            </div>
            <input className={style.search_but} type="submit" value="Искать пластинку" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default SearchForm