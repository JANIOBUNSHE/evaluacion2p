<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once("../models/doctores.model.php");

$ventas = new Clase_Doctores;

switch ($_GET["op"]) {
 
    case 'todos':
        $datos= array();
        $datos = $doctores->todos();
    while ($fila = mysqli_fetch_assoc($datos)){
        $todos[]=$fila;
    }
    echo json_encode($todos);
    break;

    case 'uno':
        $ID_doctor = $_POST["ID_doctor"];
        $datos= array();
        $datos = $doctores->uno($ID_doctor);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    
    case 'insertar':
        $ID_hospital = $_POST["IID_hospital"];
        $Nombre = $_POST["Nombre"]; 
        $Especialidad = $_POST["Especialidad"];
        $Salario = $_POST["Salario"];
        $datos= array();
        $datos = $doctores->insertar($ID_hospital,$Nombre,$Especialidad,$Salario);
        echo json_encode($datos);
        break;
    
    case 'actualizar':
        $ID_doctor = $_POST["ID_doctor"];
        $ID_hospital = $_POST["IID_hospital"];
        $Nombre = $_POST["Nombre"]; 
        $Especialidad = $_POST["Especialidad"];
        $Salario = $_POST["Salario"];
        $datos= array();
        $datos = $ventas->actualizar($ID_doctor,$ID_hospital,$Nombre,$Especialidad,$Salario);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $VentaId = $_POST["ID_doctor"];
        $datos= array();
        $datos = $doctores->eliminar($ID_doctor);
        echo json_encode($datos);
        break;



}