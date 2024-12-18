import { useParams } from "react-router"
import { Header } from "./Headers";
import { useEffect, useState } from "react";
import * as API from "./services/data"

export function StudentEdit(){
    let params = useParams();
    
    useEffect(()=>{

        API.studentEdit(params.studentId).then(setStudet);

    });

    function handleSubmit(e){
        e.preventDefault();
        alert("editando formualrio")
    }
    const [student, setStudet] = useState([]);
    return(
        <>
        <Header/>
        <form id="formulario" onSubmit={handleSubmit}>
        DNI <input type="text" id="dni" disabled value={student.dni}/><br></br>
        Nombre<input type="text" id="nombre" value={student.nombre}/><br></br>
        Direccion<input type="text" id="direccion" value={student.direccion}/><br></br>
        Edad<input type="number" id="edad" value={parseInt(student.edad)}/><br></br>
        Email<input type="text" id="email" value={student.email}/><br></br>
        <input type="submit" id="editar" value="editar"/>
        </form>
        </>
    )
}


