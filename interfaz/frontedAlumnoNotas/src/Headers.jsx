import {Link} from "react-router"

export function Header(){

    return(
        <>
        <Link to= {"/dashboard" } > <span> Listado</span></Link> 
        <Link to= {"/student" } > <span> Nuevo</span></Link>
        
        <span>Cerrar Sesion</span>
        </>
    )
}