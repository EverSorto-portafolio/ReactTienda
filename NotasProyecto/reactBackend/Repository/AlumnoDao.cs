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
    }
}

