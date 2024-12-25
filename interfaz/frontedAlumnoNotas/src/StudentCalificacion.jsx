import { useParams } from "react-router";

export function StudentCalificacion() {
    
    let params = useParams();


    //#region return
    return (
        <>
            <h1>Calificaciones {params.matriculaId}</h1>
        </>
    )
    //#endregion
}