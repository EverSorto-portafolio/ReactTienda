import { useParams } from "react-router"
import { Header } from "./Headers";
import { useEffect, useState } from "react";
import * as API from "./services/data"
import { Box, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

export function StudentEdit() {
    let params = useParams();

    useEffect(() => {
        API.studentEdit(params.studentId).then(setStudet);

    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        API.getEditStudent(student).then(resut => {
            if (resut == "true") {
                alert("Alumno editado correctamente");
            } else {
                alert("Error al editar el alumno");
            }
        });
    }
    const [student, setStudet] = useState([]);
    return (
        <>
            <Header />
            <Center>
                <Box m={"40px"} boxShadow={"xl"} borderRadius={"md"} width={"40%"} id="caja">
                    <Box textAlign={"center"}>
                        <Heading > Editar estudiante</Heading>
                    </Box>

                    <Box p={"20px"}>
                        <form id="formulario" onSubmit={handleSubmit}>

                            <FormControl mt={"3px"} >
                                <FormLabel> DNI</FormLabel>
                                <Input input type="text" id="dni" disabled value={student.dni}
                                    onChange={event => setStudet({ ...student, dni: event.target.value })} />
                            </FormControl>

                            <FormControl mt={"3px"} >
                                <FormLabel> Nombre</FormLabel>
                                <Input type="text" id="nombre" value={student.nombre}
                                    onChange={event => setStudet({ ...student, nombre: event.target.value })} />
                            </FormControl>

                            <FormControl mt={"3px"} >
                                <FormLabel>  Direccion</FormLabel>
                                <Input type="text" id="direccion" value={student.direccion}
                                    onChange={event => setStudet({ ...student, direccion: event.target.value })} />
                            </FormControl>

                            <FormControl mt={"3px"} >
                                <FormLabel>  Edad</FormLabel>
                                <Input type="number" id="edad" value={parseInt(student.edad)}
                                onChange={event => setStudet({ ...student, edad: parseInt(event.target.value) })} />
                            </FormControl>

                            <FormControl mt={"3px"} >
                                <FormLabel> Edad </FormLabel>
                                <Input type="text" id="email" value={student.email}
                                onChange={event => setStudet({ ...student, email: event.target.value })} />
                            </FormControl>
                            
                            <Box m={"10px"} >
                            <Input  mt={"20px"} type="submit"  id="editar" borderColor="teal" value="editar" />
                            </Box>

                            

                            

                        </form>
                    </Box>

                </Box>
            </Center>

        </>
    )
}


