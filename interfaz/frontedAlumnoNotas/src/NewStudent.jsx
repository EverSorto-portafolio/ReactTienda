import { useState } from "react";
import { Header } from "./Headers";
import * as API from "./services/data"

export function StudentNew(){
    const [students, setStudent] = useState ({
        dni:"",
        nombre:"",
        direccion:"",
        edad:0,
        email:"", 
        idAsignatura:4,
    })

    function handleSubmit(e){
        e.preventDefault();

        if(students != null && students.idAsignatura !=0 ){
            console.log("Procesidento a realizar el fetch");
            console.log("fetch asingID " +students.idAsignatura);
            API.createStudent(students).then(result =>{

                if(result == "true"){
                    alert("insertado")
                    document.getElementById("form-nuevoAlumno").reset()
                }else{
                    alert("Error insertar")
                }
            })
        
        }else{
            alert("Fallo al momento del envio");
        }
        
    }
    return(
        <>
        <Header/>
        <p>Ingresar nuevo alumno</p>
        <form id="form-nuevoAlumno"  onSubmit={handleSubmit}>
             DNI<input type="text" id="dni" required onChange=
             {event => setStudent({...students,dni:event.target.value })}/>
             nombre<input id="nombre" required onChange=
             {event => setStudent( {...students,nombre:event.target.value })}/> <br></br>
             Edad<input type="number" id="edad" required onChange=
            {event => setStudent( {...students,edad:parseInt(event.target.value) })}/><br></br>
             email<input type="text" id="email" required onChange=
            {event => setStudent({...students,email:event.target.value })}/><br></br>
             Direccion<input type="text" id="direccion" required onChange=
            {event => setStudent({...students,direccion:event.target.value })}/><br></br>
             asignatura<select  id="asignatura"  required onChange=
            {event =>  setStudent({...students,idAsignatura:parseInt(event.target.value)})}>
               <option value='1'> matematicas</option>
                    
                   <option value='2'> Informatica</option>
                   <option value='3'> Ingles</option>
                   <option value='4'> Lenguaje</option>
            </select>
           <br></br>
           <input type="submit" id="editar" value="Nuevo"/>
        </form>
        </>
    )
}

//