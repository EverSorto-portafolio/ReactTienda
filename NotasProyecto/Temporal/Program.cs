using reactBackend.Models;
using reactBackend.Repository;

//abstracion de un objeto Dao
AlumnoDao alumnoDao =  new AlumnoDao();
//llamamos el metodo que creamos en el DAO 
#region SelectAll
var alumno = alumnoDao.SelectAll();
// Recorremos la lista 
foreach (var item in alumno) { 
    Console.WriteLine(item.Nombre);
}
#endregion
Console.WriteLine(" ");
#region SelectByID
// Provamos el select por Id
var selectById = alumnoDao.GetById(1);
Console.WriteLine(selectById?.Nombre);
#endregion
Console.WriteLine(" ");
#region addAlumno
var nuevoAlumno = new Alumno
{
    Direccion = "Chalatenango, Barrio el centro",
    Dni = "1345",
    Edad = 30,
    Email = "12344321@email",
    Nombre= "Ricardo JR Milos"
};

var resultado = alumnoDao.inserarAlumno(nuevoAlumno);
Console.WriteLine(resultado);
#endregion