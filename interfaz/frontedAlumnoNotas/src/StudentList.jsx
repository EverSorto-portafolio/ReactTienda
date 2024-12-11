import { useEffect, useState } from "react";
import { DashBoard } from "./Dashboard";
import * as API from "./services/data"

export function StudenList() {

    let usuario = sessionStorage.getItem("usuario")
    
    const [students, setStudents] = useState([])
console.log("lista de estudiantes para el profesor " + usuario)
   
    useEffect(() => {
        API.getStudent(usuario).then(setStudents)
    })
    console.log(students.id)
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
                        students?.
                        map(students => 
                        ( <tr key={students.id}>
                            <td> {students.id}</td>
                            <td> {students.dni}</td>
                            <td> {students.nombre}</td>
                            <td> {students.direccion}</td>
                            <td> {students.edad}</td>
                            <td> {students.email}</td>
                            <td> {students.asignatura}</td>
                            <td> Editar</td>
                            <td> Calificar</td>
                            <td> eliminar </td>
                            </tr>
                        )              
                     )
                    }
                </tbody>
            </table>
        </>
    )
}