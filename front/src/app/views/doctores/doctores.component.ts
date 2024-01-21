import { Component } from '@angular/core';
import { IDoctores} from '../../Interfaces/doctores';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { DoctorService } from '../../Services/doctores.service';
@Component({
  selector: 'app-doctores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctores.component.html',
  styleUrl: './doctores.component.css',
})
export class DoctoresComponent {
  title = 'Doctores';
  stocks: IDoctores[];

  constructor(private doctoresServicio: DoctorService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.doctoresServicio.todos().subscribe((listadoctores) => {
      this.stocks = listadoctores;
      console.log(listadoctores);
    });
  }
  alerta() {
    Swal.fire('Doctores', 'Mensaje en Doctores', 'success');
  }

  eliminar(ID_doctor: number) {
    Swal.fire({
      title: 'Venta',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctoresServicio.eliminar(ID_doctor).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Doctores',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Doctores',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
