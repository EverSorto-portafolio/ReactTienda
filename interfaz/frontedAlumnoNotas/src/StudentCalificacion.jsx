import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as API from "./services/data";
import { Header } from "./Headers";
export function StudentCalificacion() {

    let params = useParams();
    const [calificaciones, setCalificaciones] = useState([]);
    const [notas, setNotas] = useState([]);

    let total = 0;
    calificaciones.map(califi => (
        total = total + califi.nota * (califi.porcentaje / 100)
    ));

    useEffect(() => {
        API.getNotas(params.matriculaId).then(data => setCalificaciones(data));
    }, []);

    function enviarNotas() {
        let NDescripcion = document.getElementById("Descripcion");
        let NNota = document.getElementById("nota");
        let NPorcentaje = document.getElementById("porcentaje");
        let NmatriculaId = params.matriculaId;
        let validar = NDescripcion.value.trim() !== "" && NNota.value.trim() !== "" && NPorcentaje.value.trim() !== "";

        if (validar) {
            let nuevaCalificacion = {
                descripcion: NDescripcion.value,
                nota: NNota.value,
                porcentaje: NPorcentaje.value,
                matriculaId: NmatriculaId
            }
            
            API.crearNotas(nuevaCalificacion).then(data => {

                if (data =="true") {
                    alert("Se añadio la calificacion con exito");
                    descripcion: NDescripcion.value = "";
                    nota: NNota.value = "";
                    porcentaje: NPorcentaje.value = "";
                } else {
                    alert("Error al añadir la calificacion");
                }
            });
        }
    }

    function borrarCalificacion(id) {
       API.deleteNotas(id).then(data => {
        console.log(id)
            if (data == "true") {
                alert("Se elimino la calificacion con exito");
                setCalificaciones(calificaciones.filter(calificacion => calificacion.id !== id));
            } else {
                alert("Error al eliminar la calificacion");
            }
        });
    }
    //#region return
    return (
        <>
            <Header />
            <table>
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Nota</th>
                        <th>Porcentage</th>
                        <th> </th>
                    </tr>

                </thead>
                <tbody>
                    {
                        calificaciones.map(calificacion => (
                            <tr key = {calificacion.id}>
                                <td>{calificacion.descripcion}</td>
                                <td>{calificacion.nota}</td>
                                <td>{calificacion.porcentaje} %</td>
                                <td onClick={()=> borrarCalificacion(calificacion.id)} >Eliminar</td>
                            </tr >
                        ))

                    }
                    <tr>
                        <td ><input type="text" id="Descripcion" placeholder="Descripcion"
                            onChange={event => setNotas({ ...notas, descripcion: event.target.value })}
                        /></td>
                        <td ><input type="number" id="nota" placeholder="nota"
                            onChange={event => setNotas({ ...notas, nota: parseInt(event.target.value) })}
                        /></td>
                        <td ><input type="text" id="porcentaje" placeholder="porcentaje"
                            onChange={event => setNotas({ ...notas, porcentaje: event.target.value })}
                        /></td>
                        <td><button id="nuevo"
                            onClick={() => enviarNotas()}
                        >Crear Calificacion</button></td>
                    </tr>
                </tbody>
            </table>
            <p>Nota Final: {total}</p>
        </>
    )
    //#endregion
}