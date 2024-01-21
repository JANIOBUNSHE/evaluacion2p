import { Component } from '@angular/core';
import { IStock} from '../../Interfaces/doctores';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { StocksService } from '../../Services/doctores.service';
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css',
})
export class StocksComponent {
  title = 'Venta';
  stocks: IStock[];

  constructor(private stocksServicio: StocksService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.stocksServicio.todos().subscribe((listastocks) => {
      this.stocks = listastocks;
      console.log(listastocks);
    });
  }
  alerta() {
    Swal.fire('Venta', 'Mensaje en Venta', 'success');
  }

  eliminar(ID_venta: number) {
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
        this.stocksServicio.eliminar(ID_venta).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Venta',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
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
