import { useEffect, useState } from "react";
import * as API from "./services/data"
import { Link } from "react-router";
import { Box, TableContainer, Table,Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

export function StudenList() {
   
    
    let usuario = sessionStorage.getItem("usuario")
    console.log();
    const [students, setStudents] = useState([])
    console.log("lista de estudiantes para el profesor " + usuario)

   


    useEffect(() => {
        if(usuario){
        API.getStudent(usuario).then(data =>{
            console.log("Datos recibidos", data);
            setStudents(data)
        })
        }
       
    }, [usuario])

        function deleteStudent(id){
            console.log("Resultado = "+id);
            API.deleteStudent(id).then(
                resultado =>{
                    if(resultado == "true"){
                        alert("estudiante eliminado")
                    }else{
                        alert("Error");
                    }
                }
            )
            
        }

     return (
        <>
            <Box m={"50px"}>
             <TableContainer>
            <Table size="md" variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>DNI</Th>
                        <Th>Nombre</Th>
                        <Th>Direccion</Th>
                        <Th>Edad</Th>
                        <Th>Email</Th>
                        <Th>Asignatura</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        students?.map(student => (
                            <Tr key={student.id}>
                             <Td>{student.id}</Td>
                             <Td>{student.dni}</Td>
                             <Td>{student.nombre}</Td>   
                             <Td>{student.direccion}</Td>
                             <Td>{student.edad}</Td>
                             <Td>{student.email}</Td>
                             <Td>{student.asignatura}</Td>
                             <Td> <Link to={'/student/'+student.id}>Editar</Link>  </Td>
                             <Td> <Link to={"/student/calificacion/" + student.matriculaId}>Calificar</Link></Td>
                             <Td onClick={()=>deleteStudent(student.id)}>Eliminar</Td>
                            </Tr>
                            )
                        )
                    }
                </Tbody>
            </Table>
            </TableContainer>
            </Box>
        </>
    )
}

//<td onClick={() => deleteStudent(students.id)}> eliminar </td>