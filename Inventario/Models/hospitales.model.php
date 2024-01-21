<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Productos
{

    public function todos()
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = " SELECT * FROM `Productos`";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function uno($ProductoId)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = " SELECT * FROM `Productos` WHERE ID_producto = $ProductoId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function insertar( $Nombre, $Precio, $Stock, $Proveedor)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Productos`( `Nombre`, `Precio`, `Stock`, `Proveedor`) VALUES ('$Nombre','$Precio','$Stock','$Proveedor')";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($ProductoId, $Nombre, $Precio, $Stock, $Proveedor)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Productos` SET `Nombre`='$Nombre',`Precio`='$Precio',`Stock`='$Stock',`Proveedor`='$Proveedor' WHERE ID_producto = $ProductoId";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($ProductoId)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM `Productos` WHERE ID_producto = $ProductoId";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
