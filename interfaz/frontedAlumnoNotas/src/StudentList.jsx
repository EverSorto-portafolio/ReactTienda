import { useEffect, useState } from "react";
import * as API from "./services/data"
import { Link } from "react-router";

export function StudenList() {
   
    
    let usuario = sessionStorage.getItem("usuario")
    console.log();
    const [students, setStudents] = useState([])
    console.log("lista de estudiantes para el profesor " + usuario)

   


    useEffect(() => {
        if(usuario){
        API.getStudent(usuario).then(data =>{
            console.log("Datos recibidos", data);
            setStudents(data)
        })
        }
       
    }, [usuario])

        function deleteStudent(id){
            console.log("Resultado = "+id);
            API.deleteStudent(id).then(
                resultado =>{
                    if(resultado == "true"){
                        alert("estudiante eliminado")
                    }else{
                        alert("Error");
                    }
                }
            )
            
        }

     return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Asignatura</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map(student => (
                            <tr key={student.id}>
                             <td>{student.id}</td>
                             <td>{student.dni}</td>
                             <td>{student.nombre}</td>   
                             <td>{student.direccion}</td>
                             <td>{student.edad}</td>
                             <td>{student.email}</td>
                             <td>{student.asignatura}</td>
                             <td> <Link to={'/student/'+student.id}>Editar</Link>  </td>
                             <td> <Link to={"/student/calificacion/" + student.matriculaId}>Calificar</Link></td>
                             <td onClick={()=>deleteStudent(student.id)}>Eliminar</td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

//<td onClick={() => deleteStudent(students.id)}> eliminar </td>