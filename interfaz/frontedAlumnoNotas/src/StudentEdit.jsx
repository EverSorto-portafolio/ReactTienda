import { useParams } from "react-router"
import { Header } from "./Headers";
import { useEffect, useState } from "react";
import * as API from "./services/data"

export function StudentEdit(){
    let params = useParams();
    
    useEffect(()=>{
        API.studentEdit(params.studentId).then(setStudet);

    },[]);

    function handleSubmit(e){
        e.preventDefault();
        API.getEditStudent(student).then( resut =>{
            if(resut == "true" ){
                alert("Alumno editado correctamente");
            }else{
                alert("Error al editar el alumno");
            }
        });
    }
    const [student, setStudet] = useState([]);
    return(
        <>
        <Header/>
        <form id="formulario" onSubmit={handleSubmit}>

        DNI <input type="text" id="dni" disabled value={student.dni}
        onChange={event => setStudet({...student, dni:event.target.value})}/><br></br>

        Nombre<input type="text" id="nombre" value={student.nombre}
        onChange={event =>setStudet({...student, nombre:event.target.value})}/><br></br>
       
        Direccion<input type="text" id="direccion" value={student.direccion}
        onChange={event =>setStudet({...student, direccion:event.target.value})}/><br></br>
        
        Edad<input type="number" id="edad" value={parseInt(student.edad)}
        onChange={event =>setStudet({...student, edad:parseInt(event.target.value)})}/><br></br>
        
        Email<input type="text" id="email" value={student.email}
        onChange={event =>setStudet({...student, email:event.target.value})}/><br></br>
        
        <input type="submit" id="editar" value="editar"/>
       
        </form>
        </>
    )
}


