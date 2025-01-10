import {Link} from "react-router"
import { useNavigate } from "react-router"
export function Header(){

    const navigate = useNavigate();
    function cerrarSesion(){
        localStorage.removeItem("usuario")
        alert("cerrando sesion")
        navigate("/")
    }
    return(
        <>
        <Link to= {"/dashboard" } > <span> Listado</span></Link> 
        <Link to= {"/student" } > <span> Nuevo</span></Link>
        <span onClick={()=> cerrarSesion()}>Cerrar Sesion</span>
        </>
    )
}