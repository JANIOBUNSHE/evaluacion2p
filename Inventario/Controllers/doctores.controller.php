<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once("../models/ventas.model.php");

$ventas = new Clase_Ventas;

switch ($_GET["op"]) {
 
    case 'todos':
        $datos= array();
        $datos = $ventas->todos();
    while ($fila = mysqli_fetch_assoc($datos)){
        $todos[]=$fila;
    }
    echo json_encode($todos);
    break;

    case 'uno':
        $VentaId = $_POST["ID_venta"];
        $datos= array();
        $datos = $ventas->uno($VentaId);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    
    case 'insertar':
        $ProductoId = $_POST["ID_producto"];
        $Cantidad = $_POST["Cantidad"]; 
        $Total = $_POST["Total"];
        $datos= array();
        $datos = $ventas->insertar($ProductoId,$Cantidad,$Total);
        echo json_encode($datos);
        break;
    
    case 'actualizar':
        $VentaId = $_POST["ID_venta"];
        $ProductoId = $_POST["ID_producto"];
        $Cantidad = $_POST["Cantidad"];
        $Total = $_POST["Total"];
        $datos= array();
        $datos = $ventas->actualizar($VentaId,$ProductoId,$Cantidad,$Total);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $VentaId = $_POST["ID_venta"];
        $datos= array();
        $datos = $ventas->eliminar($VentaId);
        echo json_encode($datos);
        break;



}