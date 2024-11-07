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
var selectById = alumnoDao.GetById(1000);
Console.WriteLine(selectById?.Nombre);
#endregion