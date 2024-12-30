import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as API from "./services/data";
import { Header } from "./Headers";
export function StudentCalificacion() {

    let params = useParams();
    const [calificaciones, setCalificaciones] = useState([]);

    useEffect(() => {
        API.getNotas(params.matriculaId).then(data => setCalificaciones(data));
    }, []);


    //#region return
    return (
        <>
        <Header/>
            <table>
                <thead>
                    <th>Descripcion</th>
                    <th>Nota</th>
                    <th>Porcentage</th>
                    <th> </th>
                </thead>
                <tbody>
                    {
                        calificaciones.map(calificacion =>(
                            <tr>
                                <td>{calificacion.descripcion}</td>
                                <td>{calificacion.nota}</td>
                                <td>{calificacion.porcentaje} %</td>
                                <td>Eliminar</td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </>
    )
    //#endregion
}