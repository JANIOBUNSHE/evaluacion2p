import { Component } from '@angular/core';
import { IHospital} from '../../Interfaces/hospital';
import { HospitalService } from '../../Services/hospital.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hospitales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.css',
})
export class HospitalesComponent {
  title = 'Hospitales';
  hospitales: IHospital[];

  constructor(private hospitalesServicio: HospitalService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.hospitalesServicio.todos().subscribe((listahospital) => {
      this.hospitales = listahospital;
      console.log(listahospital);
    });
  }
  alerta() {
    Swal.fire('Hospital', 'Mensaje en productos', 'success');
  }

  eliminar(ID_hospital: number) {
    Swal.fire({
      title: 'Hospitales',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.hospitalesServicio.eliminar(ID_hospital).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Hospitales',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Hospitales',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
