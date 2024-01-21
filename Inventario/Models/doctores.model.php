<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Ventas
{

    public function todos()
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT ventas. *,productos.Nombre FROM `Ventas` INNER JOIN productos ON ventas.ID_producto = productos.ID_producto";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function uno($VentaId)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Ventas` WHERE ID_venta = $VentaId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function insertar( $ProductoId, $Cantidad, $Total)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Ventas`( `ID_producto`, `Cantidad`, `Total`, `Fecha_venta`) VALUES ('$ProductoId','$Cantidad','$Total',CURDATE())";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($VentaId, $ProductoId, $Cantidad, $Total,)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Ventas` SET `ID_producto`='$ProductoId',`Cantidad`='$Cantidad',`Total`='$Total' WHERE ID_venta = $VentaId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($VentaId)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM `Ventas` WHERE ID_venta = $VentaId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
