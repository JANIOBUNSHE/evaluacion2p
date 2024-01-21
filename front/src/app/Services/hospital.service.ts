import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/hospital';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase: string =
  'http://localhost:/evaluacion2p/Inventario/Controllers/productos.controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IProducto[]> {
    return this.clientePhp.get<IProducto[]>(this.urlBase + 'todos');
  }
  insertar(producto: IProducto): Observable<any> {
    var prod = new FormData();
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Stock', producto.Stock.toString());
    prod.append('Proveedor', producto.Proveedor);
   

    return this.clientePhp.post(this.urlBase + 'insertar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('ID_producto', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prod);
  }
  uno(id: number): Observable<IProducto> {
    var prod = new FormData();
    prod.append('ID_producto', id.toString());
    return this.clientePhp.post<IProducto>(this.urlBase + 'uno', prod);
  }
  actualizar(producto: IProducto, id: number): Observable<any> {
    var prod = new FormData();
    prod.append('ID_producto', id.toString());
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Stock', producto.Stock.toString());
    prod.append('Proveedor', producto.Proveedor);
   
    return this.clientePhp.post(this.urlBase + 'actualizar', prod);
  }
  
}
