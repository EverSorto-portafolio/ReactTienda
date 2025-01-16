import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as API from "./services/data";
import { Header } from "./Headers";
import { Box, Table, TableContainer, Thead, Tr, Th, Tbody, Td, Input, Button, Badge, Center } from "@chakra-ui/react";
import { MdCreateNewFolder } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";


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

                if (data == "true") {
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

            <Box>
                <TableContainer>
                    <Table size={"md"}>

                        <Thead>
                            <Tr>
                                <Th>Descripcion</Th>
                                <Th>Nota</Th>
                                <Th>Porcentage</Th>
                                <Th> </Th>
                            </Tr>

                        </Thead>
                        <Tbody>
                            {
                                calificaciones.map(calificacion => (
                                    <Tr key={calificacion.id}>
                                        <Td>{calificacion.descripcion}</Td>
                                        <Td>{calificacion.nota}</Td>
                                        <Td>{calificacion.porcentaje} %</Td>
                                        <Td  ><RiDeleteBin2Fill cursor={"pointer"}
                                            onClick={() => borrarCalificacion(calificacion.id)} /></Td>
                                    </Tr >
                                ))

                            }
                            <Tr>
                                <Td ><Input type="text" id="Descripcion" placeholder="Descripcion"
                                    onChange={event => setNotas({ ...notas, descripcion: event.target.value })}
                                /></Td>
                                <Td ><Input type="number" id="nota" placeholder="nota"
                                    onChange={event => setNotas({ ...notas, nota: parseInt(event.target.value) })}
                                /></Td>
                                <Td ><Input type="text" id="porcentaje" placeholder="porcentaje"
                                    onChange={event => setNotas({ ...notas, porcentaje: event.target.value })}
                                /></Td>
                                <Td>
                                    <MdCreateNewFolder cursor={"pointer"} id="nuevo" onClick={() => enviarNotas()} />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>


                </TableContainer>

                <Center>
                <Box ml={"6px"} fontSize={"lg"} >
                    Nota Total :
                    <Badge ml="5px" variant={"outline"} colorScheme="green">
                        {total}
                    </Badge>

                </Box>

                </Center>
              



            </Box>

        </>
    )
    //#endregion
}