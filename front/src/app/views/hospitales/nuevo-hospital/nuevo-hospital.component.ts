import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HospitalService } from '../../../Services/hospital.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-hospital',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-hospital.component.html',
  styleUrl: './nuevo-hospital.component.css',
})
export class NuevoHospitalComponent {
  title = '';
  id!: number;

  hospitales: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Ciudad: new FormControl('', Validators.required),
    Numero_camas: new FormControl('', Validators.required), 
  
  });
  constructor(
    private hospitalServicio: HospitalService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Hospital';
    } else {
      this.title = 'Actualizar datos del  Hospital';
      this.hospitalServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.hospitales.patchValue({
          Nombre: res.Nombre,
          Ciudad: res.Ciudad,
          Numero_camas: res.Numero_camas,
          
        });
      });
    }
  }
  get f() {
    return this.hospitales.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Productos',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.hospitalServicio
            .insertar(this.hospitales.value, )
            .subscribe((res) => {
              Swal.fire({
                title: 'hospitales',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/productos']);
              this.id = 0;
            });
        } else {
          this.hospitalServicio
            .actualizar(this.hospitales.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'hospitales',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/hospitales']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'hospitales',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
