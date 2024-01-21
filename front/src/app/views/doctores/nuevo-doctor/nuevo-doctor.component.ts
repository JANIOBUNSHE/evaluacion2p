import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink,Router,ActivatedRoute } from '@angular/router';
import { StocksService } from '../../../Services/doctores.service';
import Swal from 'sweetalert2';
import { IProducto } from '../../../Interfaces/hospital';

import { ProductoService } from '../../../Services/hospital.service';


@Component({
  selector: 'app-nuevo-stocks',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './nuevo-stocks.component.html',
  styleUrl: './nuevo-stocks.component.css'
})
export class NuevoStocksComponent {
  title = 'Nuevo Venta';
  id!:number;
  ListaProducto:IProducto[];


  stock: FormGroup = new FormGroup({

    ID_producto: new FormControl('', Validators.required),
    Cantidad: new FormControl('', Validators.required),
    Total: new FormControl('', Validators.required),
  });
 constructor(private stockServicio:StocksService, private rutas:Router,private parametros:ActivatedRoute,  private productoServicio:ProductoService){}
 async ngOnInit(){
    this.id = this.parametros.snapshot.params['id'];
   await this.cargaProducto();

    

    console.log(this.id);
    if(this.id==0 || this.id==undefined){
      this.title = 'Nueva Venta';
    } else{
      this.title = 'Actualizar Venta';
      this.stockServicio.uno(this.id).subscribe((res)=>{
        console.log(res);
        this.stock.patchValue({
          ID_producto: res.ID_producto,
          Cantidad: res.Cantidad,
          Total: res.Total,
        
        });
      
      });
    }
  }
  get f(){
    return this.stock.controls;
  }

  cargaProducto(){
    this.productoServicio.todos().subscribe((res)=>{
      this.ListaProducto=res;
    });
  }




  grabar() {
    Swal.fire({
      title: 'Venta',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.stockServicio
            .insertar(this.stock.value, )
            .subscribe((res) => {
              Swal.fire({
                title: 'Venta',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        } else {
          this.stockServicio
            .actualizar(this.stock.value,this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Venta',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Venta',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }


}
