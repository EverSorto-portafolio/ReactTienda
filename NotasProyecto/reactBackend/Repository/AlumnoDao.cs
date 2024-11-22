using Microsoft.EntityFrameworkCore;
using reactBackend.Context;
using reactBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactBackend.Repository
{
    public class AlumnoDao
    {
        #region Contex
        // para hacer cualquier operacion con base de datos debemos llamar al contexto
        // -> La pericion llama al contexto 
        // -> contexto verifica el dataset 
        // -> El data set mediante su dataTable se actualiza 
        // -> el contexto mediante su metodo Save guarda las actualizaciones, delete o insert. 
        // -> devuvelve el tipo de correspondinete de error o peticion.

        public RegistroAlumnoContext contexto = new RegistroAlumnoContext();
        #endregion
        #region Select All
        /// <summary>
        /// Se utiliza para selecionar un elemento alumno de la base de datos.
        /// </summary>
        /// <param name="T"> T es un modelo de Sql </param>
        /// <returns> Lista de elementos del modelo que se ingrese</returns>
        public List<Alumno> SelectAll() {
            // -> creamos una variable  var que es generica 
            // -> el contexto tiene referecniada todos los modelos. 
            // -> dentro den EF tenemos  el metodo modelo.ToList<Modelo>
            var alumno = contexto.Alumnos.ToList<Alumno>();
            return alumno;
        }
        #endregion
        #region Selecionamos por ID
        
        /// <summary>
        /// Este metodo nos devolvera el objeto que contenga el primer ID que encuentre y coincida con el que se pase como paramtro Modelo ? inidca que aceptara nulos
        /// </summary>
        /// <param name="id"> entero que sera el ID del elemeto a retornor </param>
        /// <returns> un objeto Alumno </returns>
        public Alumno? GetById(int id) {
            var alumno = contexto.Alumnos.Where(x => x.Id == id).FirstOrDefault();
            return alumno == null ? null : alumno;
        }
        #endregion
        #region Insertar
        /// <summary>
        /// Insertara un alumno a la base de datos inserInto Alumno
        /// </summary>
        /// <param name="alumno"> Es un objeto con las propiedades del modelo Alumno sin el ID</param>
        /// <returns> Retorna un bool para verificar si la funcion se realizo correctamenteTrue si fallo False </returns>
        public bool inserarAlumno(Alumno alumno) {
            try 
            {
                var alum = new Alumno {
                    Direccion = alumno.Direccion,
                    Edad = alumno.Edad,
                    Email = alumno.Email,
                    Dni = alumno.Dni,
                    Nombre = alumno.Nombre,
                };               
                // añadimos al contexto de (Dataset) que representa la base de datos 
                // el metodo add
                contexto.Alumnos.Add(alum);
                // este elemento en si no nos guardara los datos para ello debemos utilizar el metodo Sabe
                contexto.SaveChanges();
              return true;
            }catch(Exception e) {
                Console.WriteLine(e.InnerException);
                return false; }
        }
        #endregion
        #region update alumno 
        /// <summary>
        /// Se utiliza un int para llamar al metod getById
        /// este nos devolvera un objeto Alumno
        /// se cambia las propiedades por el objeto Alumno que se recive com parametro
        /// se filtra que no sea null
        /// si funcina devuelve true de lo contrario false
        /// </summary>
        /// <param name="id"> id del objetio a busca</param>
        /// <param name="actualizar"> Objeto de tipo Alumno con el cual se sustituira lainformacion en la base de datos</param>
        /// <returns> Si es correcto el update True de lo contrario un false</returns>
        public bool update(int id, Alumno actualizar) {
            try {
                var alumnoUpdate = GetById(id);

                if (alumnoUpdate == null) {
                    Console.WriteLine("Alumno es null");
                    return false;
                }
                
                alumnoUpdate.Direccion = actualizar.Direccion;
                alumnoUpdate.Dni = actualizar.Dni;
                alumnoUpdate.Nombre = actualizar.Nombre;
                alumnoUpdate.Email = actualizar.Email;

                contexto.Alumnos.Update(alumnoUpdate);
                contexto.SaveChanges();
                return true;


            }catch(Exception e) { Console.WriteLine(e.InnerException);
                return false;
            }
        }
        #endregion
        #region Delete
        /// <summary>
        /// Acepta el ID de un objeto, este ID lo pasa a un parametro de la funcion borrar
        /// </summary>
        /// <param name="id"> identificador del objeto sin FK a borrar</param>
        /// <returns> True si es correcto el proceso, False si fue erroneo</returns>
        public bool deleteAlumno(int id) { 
            var borrar = GetById(id);
            try
            {
                if (borrar == null)
                {
                    return false;
                }
                else {
                    contexto.Alumnos.Remove(borrar);
                    contexto.SaveChanges();
                    return true;
                }
                
            } catch (Exception e) { 
                Console.WriteLine(e.InnerException);
                return false;
            }
        }
        #endregion
        #region LeftJoin
        public List<AlumnoAsignatura> SelectAlumASig() {

            var consulta = from a in contexto.Alumnos
                join m in contexto.Matriculas on a.Id equals m.AlumnoId
                join asig in contexto.Asignaturas on m.AsignaturaId equals asig.Id
                  select new AlumnoAsignatura
                  {
                    nombreAlumno = a.Nombre,
                     nombreAsignatura = asig.Nombre
                  };

            try {
                return consulta.ToList();

            } catch (Exception e) {
                Console.WriteLine();
                return null;
            
            }
            
        }
        #endregion
        #region leftJoinAlumnoMAtriculaMateria
        public List<AlumnoProfesor> alumnoProfesors(string nombreProfesor) {
            var listadoALumno = from a in contexto.Alumnos
                                join m in contexto.Matriculas on a.Id equals m.AlumnoId
                                join asig in contexto.Asignaturas on m.AsignaturaId equals asig.Id
                                where asig.Profesor == nombreProfesor
                                select new AlumnoProfesor
                                {
                                    Id = a.Id,
                                    Dni = a.Dni,
                                    Nombre = a.Nombre,
                                    Direccion = a.Direccion,
                                    Edad = a.Edad,
                                    Email = a.Email,
                                    asignatura = asig.Nombre
                                };
            
            return listadoALumno.ToList();
        }
        #endregion

        
    }
}

