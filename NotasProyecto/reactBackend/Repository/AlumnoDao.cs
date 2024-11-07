﻿using reactBackend.Context;
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
    }
}
