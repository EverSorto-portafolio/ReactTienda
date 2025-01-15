import { Box, Flex, HStack, Image} from "@chakra-ui/react";
import {Link} from "react-router"
import { useNavigate } from "react-router"
import logo from "./assets/logo.png"


export function Header(){

    const navigate = useNavigate();
    function cerrarSesion(){
        localStorage.removeItem("usuario")
        alert("cerrando sesion")
        navigate("/")
    }
    return(
        <>
        <Flex w="100%"  h="36px" align="center" justify="space-between" bgColor="#11ab04" >
        <HStack ml={"10px"} as="nav" spacing={"10px"}>
       <Image src={logo} h="30px" ml="5px" />
        <Link to= {"/dashboard" } > <Box _hover={{color: "gray.300"}}> Listado</Box></Link> 
        <Link to= {"/student" } > <Box _hover={{color: "gray.300"}}> Nuevo</Box></Link>
        </HStack>
        <HStack as="nav" spacing={"10px"}>

        </HStack>
        <Box mr={"20px"} cursor={"pointer"} _hover={{color: "gray.300"}} onClick={()=> cerrarSesion()} > Cerrar</Box>
        
        </Flex>
        </>
    )
}