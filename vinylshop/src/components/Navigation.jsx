import React from 'react';
import style from "./Navigation.module.css";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className={style.nav_wrapper}>
                <nav>
                    <div className={style.rows}>
                        <div class="row animate__animated animate__backInLeft">
                            <div id = {style.nav_item} class="col-3 col-md-3 .col-sm-3">
                                <Link to="/catalog">Каталог</Link>
                            </div>
                            <div id = {style.nav_item} class="col-4 col-md-3 col-sm-3">
                                <Link to="/about">О нас</Link>
                            </div>
                            <div id = {style.nav_item} class="col-2 col-md-3 col-sm-3">
                                <Link to="/order">Доставка</Link>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navigation