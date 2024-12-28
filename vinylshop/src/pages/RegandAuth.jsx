import React from 'react';
import style from "./RegAuth.module.css";
import RegForm from '../components/RegForm';
import LogForm from '../components/LogForm';

function RegandAuth() {
  return (
    <div id ={style.forms} class="container custom-container">
        <div className="row">
            <div className="col">
            <p className={style.upper_form_label}>Форма регистрации</p>
            <RegForm/>
            </div>
            <div className="col">
            <p className={style.upper_form_label}>Форма авторизации</p>
            <LogForm/>
            </div>
        </div>
    </div>
  )
}

export default RegandAuth