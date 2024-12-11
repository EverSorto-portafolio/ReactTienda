import { useState } from 'react'
import * as API from "./services/data"
import imagen from "./assets/login.png"
import { useNavigate } from 'react-router'


export function Login() {
    
    const [teacher, setTeacher] = useState({
        usuario: "", pass: ""
    });
    
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await API.login(teacher.usuario, teacher.pass);
        
        if (response == "Elemeno no encontrado") {
            alert("Usuario no encontrado");
        }
        if (response.length != 0 && response != "Elemeno no encontrado") {
            sessionStorage.setItem("usuario", response);   
            navigate("/dashboard")
            console.log("Bienvenido nuevamente  = " + response);
        }
    }
    return (
        <>
            <img src={imagen} />
            <h1>Formulario desde</h1>

            <form id='formulario' onSubmit={handleSubmit}>
                <br></br>
                Usuario  <input type='text' id='usuario' onChange={
                    event => setTeacher({ ...teacher, usuario: event.target.value })} />
                <br></br>
                Password <input type='password' id='password'
                    onChange={event => setTeacher({ ...teacher, pass: event.target.value })} />
                <br></br>
                <input type='submit' id="enviar" />
            </form>
        </>
    )
}