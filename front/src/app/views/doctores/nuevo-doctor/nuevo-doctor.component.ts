import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../../Services/doctores.service';
import Swal from 'sweetalert2';
import { IDoctores } from '../../../Interfaces/doctores';

@Component({
  selector: 'app-nuevo-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-doctor.component.html',
  styleUrl: './nuevo-doctor.component.css'
})
export class NuevoStocksComponent {
  title = 'Nuevo Doctor';
  id!: number;
  ListaDoctores: IDoctores[];


  doctores: FormGroup = new FormGroup({

    ID_doctor: new FormControl('', Validators.required),
    ID_hospital: new FormControl('', Validators.required),
    Nombre: new FormControl('', Validators.required),
    Especialidad: new FormControl('', Validators.required),
    Salario: new FormControl('', Validators.required),
  });
  constructor(private doctoresServicio: DoctorService, private rutas: Router, private parametros: ActivatedRoute,) { }
  async ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    await this.cargaDoctores();



    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Doctor';
    } else {
      this.title = 'Actualizar Doctor';
      this.doctoresServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.doctores.patchValue({

          ID_doctor: res.ID_doctor,
          ID_hospital: res.ID_hospital,
          Nombre: res.Nombre,
          Especialidad: res.Especialidad,
          Salario: res.Salario,

        });

      });
    }
  }
  get f() {
    return this.doctores.controls;
  }

  cargaDoctores() {
    this.doctoresServicio.todos().subscribe((res) => {
      this.ListaDoctores = res;
    });
  }




  grabar() {
    Swal.fire({
      title: 'Doctor',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.doctoresServicio
            .insertar(this.doctores.value,)
            .subscribe((res) => {
              Swal.fire({
                title: 'doctores',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/doctores']);
              this.id = 0;
            });
        } else {
          this.doctoresServicio
            .actualizar(this.doctores.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Doctores',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/doctores']);
              this.id = 0;
            });
        }
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
