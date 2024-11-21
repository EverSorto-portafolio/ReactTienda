using reactBackend.Context;
using reactBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactBackend.Repository
{
    public class ProfesorDao
    {
        #region contex
        public RegistroAlumnoContext context =
            new RegistroAlumnoContext();
        #endregion
        #region GetById
        //Creamos un metodo que recibe 2 paramtros 
        // usaurio y pass
        //Creamos una exprecion lamda que recibe
        //usuario -> usurio ingresado en el Body
        //Pass -> constraseña descrita en el body
        /// <summary>
        /// Se utiliza para definir el  login del profesor 
        /// es una comparacion donde el Pass y el usuario coinciden
        /// </summary>
        /// <param name="usuario"> string </param>
        /// <param name="pass"> string</param>
        /// <returns> Profesor</returns>
        public Profesor login(string usuario, string pass){ 
            // creamos una fucnion flecha (x)=>{}
            // where define una condicon logica de comparacion 
            // p es un objeto temporal que represnta al modelo profesor
            //FirstOrDefault()
            //llama al primaro que cumpla con la condicon de lo contrario de null 
            var prof = context.Profesors.Where(
                p => p.Usuario == usuario 
                && p.Pass==pass).FirstOrDefault();
            //retornamos el resultado de la consulta Lamda
            return prof;
        }
        #endregion
    }
}
