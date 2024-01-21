<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Hospitales
{

    public function todos()
    {

        try {|
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = " SELECT * FROM `Hospitales`";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function uno($ID_hospital)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = " SELECT * FROM `Hospitales` WHERE ID_hospital = $ID_hospital";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function insertar( $Nombre, $Ciudad, $Numero_camas)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Hospitales`( `Nombre`, `Ciudad`, `Numero_camas`) VALUES ('$Nombre','$Ciudad','$Numero_camas')";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($ID_hospital, $Nombre, $Ciudad, $Numero_camas)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `hospitales` SET `Nombre`='$Nombre',`Ciudad`='$Ciudad',`Numero_camas`='$Numero_camas' WHERE ID_hospital = $ID_hospital";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($ID_hospital)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM `Hospitales` WHERE ID_hospital = $ID_hospital";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
