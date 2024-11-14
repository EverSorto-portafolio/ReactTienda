using reactBackend.Models;
using reactBackend.Repository;

//abstracion de un objeto Dao
AlumnoDao alumnoDao =  new AlumnoDao();
//llamamos el metodo que creamos en el DAO 
#region SelectAll
var alumno = alumnoDao.SelectAll();
// Recorremos la lista 
foreach (var item in alumno) { 
    Console.WriteLine(item.Id + " " +  item.Nombre);
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
//var resultado = alumnoDao.inserarAlumno(nuevoAlumno);
//Console.WriteLine(resultado);
#endregion

#region updateAlumno

var nuevoAlumno2 = new Alumno
{   
    Direccion = "Chalatenango, Barrio el centro",
    Dni = "1345",
    Edad = 30,
    Email = "5@email",
    Nombre = "Wiliams"
};

//var resultado2 = alumnoDao.update(2, nuevoAlumno2);
//Console.WriteLine(resultado2);
#endregion

#region borrar
  var result =  alumnoDao.deleteAlumno(1007);
Console.WriteLine( "Se elimino " +result);
#endregion

#region alumnoAsignatura desde un JOOIN

var alumAsig = alumnoDao.SelectAlumASig();

foreach (AlumnoAsignatura alumAsig2 in alumAsig) {
    Console.WriteLine(alumAsig2.nombreAlumno + " Asignaruta que cursa " + alumAsig2.nombreAsignatura);
}
#endregion
