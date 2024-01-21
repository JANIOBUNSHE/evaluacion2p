<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once("../models/productos.model.php");
$productos = new Clase_Productos;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $productos->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;

    case 'uno':
        $ProductoId = $_POST["ID_producto"];
        $datos = array();
        $datos = $productos->uno($ProductoId);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;

    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Precio = $_POST["Precio"];
        $Stock = $_POST["Stock"];
        $Proveedor = $_POST["Proveedor"];
        $datos = array();
        $datos = $productos->insertar( $Nombre, $Precio, $Stock, $Proveedor);
        echo json_encode($datos);
        break;

    case 'actualizar':
        $ProductoId = $_POST["ID_producto"];
        $Nombre = $_POST["Nombre"];
        $Precio = $_POST["Precio"];
        $Stock = $_POST["Stock"];
        $Proveedor = $_POST["Proveedor"];
        $datos = array();
        $datos = $productos->actualizar($ProductoId, $Nombre, $Precio, $Stock, $Proveedor);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $ProductoId = $_POST["ID_producto"];
        $datos = array();
        $datos = $productos->eliminar($ProductoId);
        echo json_encode($datos);
        break;
}
