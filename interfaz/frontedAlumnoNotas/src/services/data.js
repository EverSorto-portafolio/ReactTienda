import { data } from "react-router";

const URL = 'https://localhost:7277/api/';
//#region Login
export function login(usuarioBody, passBody) {
    let datos = {
        usuario: usuarioBody, pass: passBody
    }

    return fetch(URL +"autentificacion",{
        method:"POST", 
         body:JSON.stringify(datos),  
         headers:{ "Content-Type": "application/json"}
        
    }).then(data => data.text())

}
//#endregion
//#region getStudent
export function getStudent(usuario){
    return fetch(URL + 'alumnoProfesor?usuario=' + usuario,
    {
        headers:
        {
            'Content-Type':"application/json"
        }
    }).then(data =>data.json())
}
//#endregion
//#region createStudent
export function createStudent(student){
    let data = {
        dni:student.dni,
        nombre: student.nombre,
        direccion: student.direccion,
        edad:student.edad,
        email:student.email, 
        idAsignatura:student.idAsignatura
    } 
    console.log("Id" + data.idAsignatura);
    return fetch(URL+"alumno?idAsignatura=" + data.idAsignatura, {
        
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(data => data.text())

}
//#endregion
//#region  deleteStudent
export function deleteStudent(id){
    return fetch( URL + "alumno?id=" + id, {
        method:'DELETE',
        headers:{
            "Content-Type": 'application/json'
        }
    } ).then( data => data.text())
}
//#endregion
//#region editStudent
    export function studentEdit(id){
        return fetch(URL+"alumno?id=" + id, {
            headers:{
                "Content-Type": "application/json"
            }
        }).then(data => data.json());
    }
//#endregion


















