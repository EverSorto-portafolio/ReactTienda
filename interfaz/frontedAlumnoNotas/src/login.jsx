import { useState } from 'react'
import * as API from "./services/data"
import imagen from "./assets/login.png"
import { useNavigate } from 'react-router'
import { Box, Center, FormControl, FormLabel, Heading, Input, Image } from '@chakra-ui/react';


export function Login() {

    const [teacher, setTeacher] = useState({
        usuario: "", pass: ""
    });

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await API.login(teacher.usuario, teacher.pass);

        if (response == "Elemeno no encontrado") {
            Swal.fire("Ha ocurrido un error");
        }
        if (response.length != 0 && response != "Elemeno no encontrado") {
            sessionStorage.setItem("usuario", response);
            navigate("/dashboard")
            console.log("Bienvenido nuevamente  = " + response);
        }
    }
    return (
        <>
            <Box mt="10rem">
                <Center >
                    <Image mt="3px" width="150px" height="200px" src={imagen} />

                </Center>
                <Center>
                    <Box borderRadius="md" m="2%" width="md" id='caja' boxShadow="xl">
                        <Box textAlign="center" >
                            <Heading>Inicio de sesión</Heading>
                        </Box>
                        <Box p="20px">
                            <form id='formulario' onSubmit={handleSubmit}>
                                <FormControl >
                                    <FormLabel p="20px" > Usuario </FormLabel>
                                    <Input required type='text' id='usuario' onChange={
                                        event => setTeacher({ ...teacher, usuario: event.target.value })} />
                                </FormControl>

                                <FormControl mt='3px'>
                                    <FormLabel p="20px" > Password </FormLabel>
                                    <Input required type='password' id='password'
                                        onChange={event => setTeacher({ ...teacher, pass: event.target.value })} />
                                </FormControl>

                                <FormControl mt='3px'>
                                    <FormLabel p="20px" > Password </FormLabel>
                                    <Input required type='submit' id='enviar' mt='3px' borderColor='teal' value='login' />
                                </FormControl>
                            </form>
                        </Box>
                    </Box>
                </Center>
            </Box>
        </>
    )
}