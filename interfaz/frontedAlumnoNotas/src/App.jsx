import { useState } from 'react'
import * as API from "./services/data"
import imagen  from  "./assets/login.png"

export function App() {
  const [teacher, setTeacher] = useState({
    usuario:"", pass: ""});
 
    async function handleSubmit (e) {
    e.preventDefault();
   
    const response = await API.login(teacher.usuario, teacher.pass);

    if(response == "Elemeno no encontrado"){
      alert("Usuario no encontrado");
    }
    if(response.length != 0 && response !="Elemeno no encontrado" ){
      console.log("Bienvenido nuevamente  = " +response);
    }
      }
  return (
    <>
      <img src={imagen}/>
      <h1>Formulario</h1>
      
      <form id='formulario' onSubmit={handleSubmit}>
      <br></br>
        Usuario  <input type='text' id='usuario' onChange={
          event => setTeacher({...teacher, usuario:event.target.value})}/>
        <br></br>
        Password <input  type='password' id='password'
        onChange={event => setTeacher({...teacher, pass:event.target.value})} />
        <br></br>
        <input type='submit' id="enviar"/> 
      </form>
    </>
  )
}

