import React from 'react';
import style from "./Navigation.module.css";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className={style.nav_wrapper}>
                <nav>
                    <div className={style.rows}>
                        <div class="row">
                            <div class="col-1">
                                <Link to="/catalog">Каталог</Link>
                            </div>
                            <div class="col-1">
                                <Link to="/catalog">О нас</Link>
                            </div>
                            <div class="col-1">
                                <Link to="/catalog">Доставка</Link>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navigation