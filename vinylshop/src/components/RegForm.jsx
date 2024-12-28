import React from 'react'
import style from "./RegAu.module.css";
import { useState, useRef } from 'react';


function RegForm() {
    const [login, setlog] = useState('');
    const [mail, setm] = useState('');
    const [error, setError] = useState('');
    const [passwd, setpass] = useState('');
    const handleReg = (event) => {
        event.preventDefault();
        if (login.trim() != '' && passwd.trim() != '' && mail.trim() != '')
        {
            if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(mail))
            {
                alert(`Успех! \n Логин ${login} \n Пароль ${passwd} \n Почта ${mail}`)
            }

            else
            {
                setError("Введите email корректно!")
            }

        }
        else
        {
            setError("Пустые значения не принимаются!")
        }
    }
  return (
    <form className={style.search_form} onSubmit={handleReg}>
                <label >Логин</label> <br />
                <input className={style.search_input} name="login" type="text" onChange={(e) => setlog(e.target.value)} /> <br />
                <label for="passw" >Пароль</label> <br />
                <input id="passw" className={style.search_input} name="alb" type="password" onChange={(e) => setpass(e.target.value)}  /> <br />
                <label for="passw" >Почта</label> <br />
                <input id="mail" className={style.search_input} name="email" type="text" onChange={(e) => setm(e.target.value)}  /> <br />
                <input className={style.search_but} type="submit" value="Регистрация" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
  )
}

export default RegForm