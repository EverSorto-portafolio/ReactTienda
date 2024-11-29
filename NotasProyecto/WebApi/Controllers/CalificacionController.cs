using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using reactBackend.Models;
using reactBackend.Repository;

namespace WebApi.Controllers
{
    [Route("api/")]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        //Creamos una instancia del elemento CalificacionDAO 
        private CalificacionDao _cdao = new CalificacionDao();

        #region Lista_de_calificaciones
        [HttpGet("calificacion")]
        public List<Calificacion> get(int idMatricula) { 
           return _cdao.seleccion(idMatricula);
        }
        #endregion

        #region ingresarDatos
        //El metodo al ingresar datos sera post
        [HttpPost("calificacion")]
        public bool insertar([FromBody] Calificacion calificacion) {
        return _cdao.insertar(calificacion);
        }
        #endregion

        #region EliminarCalificaciones
        [HttpDelete("Calificacion")]

        public bool delete(int idCalificacion) {

            return _cdao.eliminarCalificaicon(idCalificacion);
        
        }
        #endregion
    }
}
