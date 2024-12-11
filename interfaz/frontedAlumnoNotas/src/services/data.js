const URL = 'https://localhost:7277/api/';

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

export function getStudent(usuario){
    return fetch(URL + 'alumnoProfesor?usuario=' + usuario,
    {
        method: "GET",
        headers:
        {
            'Content-Type':"application/json"
        }
    }).then(data =>data.json())
}