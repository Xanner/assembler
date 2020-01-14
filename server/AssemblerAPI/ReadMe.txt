Wymagania:
.Net Core SDK 2.1
.Sql Server 2017

Przed uruchomieniem nale�y skonfigurowa� plik application.json - connectionString na w�asny dolokalnej bazy
Nale�y stworzy� baz� o nazwie podanej w ConnectionStringu
Nale�y uruchomi� skrypty DDL SQL Podane poni�ej i stworzy� tabele z constraintami i trigerami.
Teraz mo�na uruchomi� host za pomoc� komendy "dotnet watch run" w katalogu z projektem.







SkryptySql:

CREATE TABLE Courses (
COR_ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
COR_Name NVARCHAR(255)
);

CREATE TABLE RegistryValues (
RVL_ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
RVL_Type NVARCHAR(100),
RVL_Value NVARCHAR(100)
);

CREATE TABLE Codes (
COD_ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
COD_CourseID INT FOREIGN KEY REFERENCES Courses(COR_ID),
COD_LineNumber INT,
COD_Type NVARCHAR(100),
COD_Operation NVARCHAR(100),
COD_LeftValue INT FOREIGN KEY REFERENCES RegistryValues(RVL_ID),
COD_RightValue INT FOREIGN KEY REFERENCES RegistryValues(RVL_ID),
COD_Comment NVARCHAR(400) 
);

