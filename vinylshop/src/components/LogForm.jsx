import React from 'react';
import style from "./RegAu.module.css";
import { useState, useRef } from 'react';

function LogForm() {
    const [login, setlog] = useState('');
        const [error, setError] = useState('');
        const [passwd, setpass] = useState('');
    const handleLog = (event) => {
        event.preventDefault();
        if (login.trim() != '' && passwd.trim() != '')
        {
            alert(`Успех! \n Логин ${login} \n Пароль ${passwd}`)
        }
        else
        {
            setError("Заполните ячейки!")
        }
    }
  return (
    <form className={style.search_form} onSubmit={handleLog}>
                    <label >Логин</label> <br />
                    <input className={style.search_input} name="login" type="text" onChange={(e) => setlog(e.target.value)} /> <br />
                    <label for="passw" >Пароль</label> <br />
                    <input id="passw" className={style.search_input} name="alb" type="password" onChange={(e) => setpass(e.target.value)}  /> <br />
                    <input className={style.search_but} type="submit" value="Вход" />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
  )
}

export default LogForm