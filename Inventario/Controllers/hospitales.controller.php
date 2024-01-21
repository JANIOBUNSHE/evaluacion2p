<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once("../models/hospitales.model.php");
$productos = new Clase_Hospitales;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $hospitales->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;

    case 'uno':
        $ProductoId = $_POST["ID_hospital"];
        $datos = array();
        $datos = $hospitales->uno($ID_hospital);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;

    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Numero_camas = $_POST["Numero_camas"];
        $datos = array();
        $datos = $hospitales->insertar( $Nombre, $Ciudad, $Numero_camas);
        echo json_encode($datos);
        break;

    case 'actualizar':
        $ID_hospital = $_POST["ID_hospital"];
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Numero_camas = $_POST["Numero_camas"];
        $datos = array();
        $datos = $hospitales->actualizar($ID_hospital, $Nombre, $Ciudad, $Numero_camas);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $ID_hospital = $_POST["ID_hospital"];
        $datos = array();
        $datos = $hospitales->eliminar($ID_hospital);
        echo json_encode($datos);
        break;
}
