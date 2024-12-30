using reactBackend.Context;
using reactBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactBackend.Repository
{
  public   class CalificacionDao
    {
        private RegistroAlumnoContext _contexto = new RegistroAlumnoContext();

        #region Seleccionar_lista_caificaciones 
        public List<Calificacion> seleccion(int matriculaid) {

           // var matricula = _contexto.Matriculas.Where(x => x.Id == matriculaid).FirstOrDefault();
               
            try {
                var idCalificaion = _contexto.Calificacions.Where(c => c.MatriculaId == matriculaid).FirstOrDefault();
                Console.WriteLine("matricula encontrada" + idCalificaion?.Id);
                if (idCalificaion.Id != null)
                {
                   var calificacion = _contexto.Calificacions.Where(x => x.Id == idCalificaion.Id).ToList();
                   return calificacion;
                }
                else {

                    return null;
                }
                
            }catch(Exception ex) { 
            
                Console.WriteLine(ex.Message);
                return null;
            }
            
        
        }
        #endregion

        #region insertarDatos
        public bool insertar(Calificacion calificacion) {

            try
            {
                if (calificacion == null)
                {
                    return false;
                }
                var addCalificacion = _contexto.Calificacions.Add(calificacion);
                _contexto.SaveChanges();
                Console.WriteLine("Guardado");
                return true;

            }
            catch (Exception ex) {
                return false;            
            }
        }
        #endregion

        #region borrar

        public bool eliminarCalificaicon(int id) {

            var calificacion = _contexto.Calificacions.Where(x => x.Id == id).FirstOrDefault();
            try {
                if (calificacion != null) {

                    _contexto.Calificacions.Remove(calificacion);
                    _contexto.SaveChanges();
                    return true;
                } else { 
                
                    return false;
                }
            
            } catch(Exception e) {
                Console.WriteLine(e.Message);
            
            return false;
            }
        }
        #endregion
    }
}
