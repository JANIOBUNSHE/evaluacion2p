<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Doctores
{

    public function todos()
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT doctores. *,hospitales.Nombre FROM `Doctores` INNER JOIN hospiales ON doctores.ID_doctor = doctores.ID_doctor";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function uno($DoctorId)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Doctores` WHERE ID_doctor = $DoctorId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function insertar( $ID_doctor, $ID_hospital, $Nombre,$Especialidad,$Salario)
    {

        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Doctores`(  `ID_hospital`, `Nombre`, `Especialidad`, `Salario`) VALUES ('$ID_hospital','$Nombre','$Especialidad','$Salario')";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($ID_doctor, $ID_hospital, $Nombre, $Especialidad, $Salario,)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Doctores` SET `ID_hospital`='$ID_hospital',`Nombre`='$Nombre',`Especialidad`='$Especialidad',`Salario`='$Salario' WHERE ID_doctor = $ID_doctor";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($ID_doctor)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM `Doctores` WHERE ID_doctor = $ID_doctor";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (\Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
