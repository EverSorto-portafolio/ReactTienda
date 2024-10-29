Use registroAlumno;
CREATE TABLE alumno(
id int IDENTITY (1,1) primary key,
dni VARCHAR (8) NOT NULL,
nombre VARCHAR(255) NOT NULL,
direccion VARCHAR (255) NOT NULL,
edad int NOT NULL,
email VARCHAR (100) NOT NULL
);


CREATE TABLE profesor(
usuario VARCHAR(255) PRIMARY KEY,
pass VARCHAR (255) NOT NULL, 
nombre VARCHAR (255) NOT NULL, 
email VARCHAR (255) NOT NULL
);


CREATE TABLE asignatura(
id	INT	 IDENTITY (1,1) PRIMARY KEY,
nombre VARCHAR (255) NOT NULL, 
creditos INT DEFAULT 0 NOT NULL, 
profesor VARCHAR(255),
FOREIGN KEY (profesor) REFERENCES profesor(usuario)
);


CREATE TABLE matricula(
	id int IDENTITY(1,1) PRIMARY KEY,
	alumnoId INT NOT NULL, 
	asignaturaId INT NOT NULL, 
	FOREIGN KEY (alumnoId) REFERENCES  alumno(id),
	FOREIGN KEY (asignaturaId) REFERENCES asignatura(Id)
);


CREATE TABLE  calificacion (
	id int IDENTITY(1,1) PRIMARY KEY,
	descripcion VARCHAR (255) NOT NULL,
	nota REAL NOT NULL,
	porcentaje INT NOT NULL, 
	matriculaId INT NOT NULL, 
	FOREIGN KEY (matriculaId) REFERENCES matricula(id)

);