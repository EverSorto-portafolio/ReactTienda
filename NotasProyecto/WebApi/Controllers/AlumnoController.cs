using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using reactBackend.Models;
using reactBackend.Repository;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        #region AlumnoDaoInstancia
        /// <summary>
        /// Este elemento representa el modelo de datos de alumnos para poder instancialo es privado.
        /// </summary>
        private AlumnoDao _dao = new AlumnoDao();
        #endregion
        #region endPonitAlumnoProfesor
        //nombre al cual debe acceder la ruta del endpoint
        [HttpGet("alumnoProfesor")]
        public List<AlumnoProfesor> GetAlumnoProfesor(string usuario) {
            return _dao.alumnoProfesors(usuario);
        }

        #endregion
        #region SelectByID
        [HttpGet("alumno")]
        public Alumno seletById(int id) { 
            var alumno = _dao.GetById(id);
            return alumno;
        }
        #endregion
        #region ActualizarDatos
        // el metodo para actualizar es put
        [HttpPut("alumno")]
        // puede tener el mismo nombre que el endpoint anterior ya que es un metodo diferente el que se esta utilizando 
        
        public bool actualizarAlumno([FromBody] Alumno alumno) {
            // [FromBody] indica que se obtendra desde el navagador el objeto
            // Alumno es el objeto 
            //alumno es el nombre de la instancia de ese objeto

            return _dao.update(alumno.Id, alumno);
        
        }

        #endregion
        #region AlumnoMatricula
        // Cuando queremos crear un nuevo registro se debe de utilizar un metodo Post
        // Lo llamaremos alumno  aunque se llame igual la direccion se sobre escribe el metodo http.
        [HttpPost("alumno")]
        //Para insertar el amumno vamos a necesitar todos los datos del alumno. Lo obtendremos el body [FromBody] Objeto nombre_objeto
        public bool insertarMatricula([FromBody] Alumno alumno, int  idAsignatura) {
            return _dao.InsertarMatricula(alumno, idAsignatura);
        }
        #endregion
        #region deleteAlumno

        // Crearemos el enunciado del metodo http
        [HttpDelete("alumno")]
        // se `puede utilizar la sobrecarga con la url al ser diferente metodo http

        public bool eliminarAlumno(int id) {
          return  _dao.eliminarAlumno(id);   
        }
        #endregion
    }
}
