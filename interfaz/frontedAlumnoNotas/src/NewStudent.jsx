import { useState } from "react";
import { Header } from "./Headers";
import * as API from "./services/data"
import { Center, Box, Heading, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export function StudentNew(){
    const [students, setStudent] = useState ({
        dni:"",
        nombre:"",
        direccion:"",
        edad:0,
        email:"", 
        idAsignatura:4,
    })

    function handleSubmit(e){
        e.preventDefault();

        if(students != null && students.idAsignatura !=0 ){
            console.log("Procesidento a realizar el fetch");
            console.log("fetch asingID " +students.idAsignatura);
            API.createStudent(students).then(result =>{

                if(result == "true"){
                    alert("insertado")
                    document.getElementById("form-nuevoAlumno").reset()
                }else{
                    alert("Error insertar")
                }
            })
        
        }else{
            alert("Fallo al momento del envio");
        }
        
    }
    return(
        <>
        <Header/>
        <Center>
       <Box m={"40PX"} boxShadow={"xl"} borderRadius={"md"} w={"40%"} id="caja">
        <Box textAlign={"center"}>
            <Heading>Ingresar nuevo Alumno</Heading>
        </Box>
        <Box p={"20px"}>
        <form id="form-nuevoAlumno"  onSubmit={handleSubmit}>
             <FormControl mt={"5px"}>
                <FormLabel>DNI</FormLabel>
                <Input type="text" id="dni" required onChange=
                {event => setStudent({...students,dni:event.target.value })}/>
             </FormControl>
             
             <FormControl mt={"5px"}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" id="nombre" required onChange=
             {event => setStudent( {...students,nombre:event.target.value })}/>
             </FormControl>
             
            <FormControl mt={"5px"}>
                <FormLabel>Edad</FormLabel>
                <Input type="number" id="edad" required onChange=
            {event => setStudent( {...students,edad:parseInt(event.target.value) })}/>
             </FormControl>
             
             <FormControl mt={"5px"}>
                <FormLabel>Email</FormLabel>
                <Input type="text" id="email" required onChange=
            {event => setStudent({...students,email:event.target.value })}/>
             </FormControl>
           
             <FormControl mt={"5px"}>
                <FormLabel>Direccion</FormLabel>
                <Input type="text" id="direccion" required onChange=
            {event => setStudent({...students,direccion:event.target.value })}/>
             </FormControl>
             
             <FormControl mt={"5px"}>
                <FormLabel>Direccion</FormLabel>
                <Select  id="asignatura"  required onChange=
            {event =>  setStudent({...students,idAsignatura:parseInt(event.target.value)})}>
                <option value='1'> matematicas</option>
                    
                    <option value='2'> Informatica</option>
                    <option value='3'> Ingles</option>
                    <option value='4'> Lenguaje</option>
                </Select>
             </FormControl>
           
             <FormControl mt={"5px"}>
                <FormLabel>Direccion</FormLabel>
                <Input borderColor={"teal"} mt={"3px"} type="submit" id="editar" value="Nuevo" />
                
             </FormControl>
           
        </form>
        </Box>
       </Box>
        
        </Center>
        
        </>
    )
}

//