const URL = 'https://localhost:7277/api/';

export function login(usuarioBody, passBody) {
    let datos = {
        usuario: usuarioBody, pass: passBody
    }

    return fetch(URL+"autentificacion",{
        method:"POST", // metodo que se utiliza
        body:JSON.stringify(datos),  //JSON.stringify() en JavaScript se utiliza para convertir un objeto, un array u otro valor en una cadena de texto en formato JSON.
        headers:{
            "Content-Type": "application/json"
        }
    }).then(data => data.text())
     // data.text() nos inidca que se debe de parsear la texto el campo indicado
}