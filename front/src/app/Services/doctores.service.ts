import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctores } from '../Interfaces/doctores';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private urlBase: string =
  'http://localhost:/evaluacion2p/Inventario/Controllers/ventas.controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IDoctores[]> {
    return this.cliente.get<IDoctores[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IDoctores> {
    var stock = new FormData();
    stock.append('ID_venta', id.toString());
    return this.cliente.post<IDoctores>(this.urlBase + 'uno', stock);
  }
  insertar(doctores: IDoctores): Observable<any> {
    var doct = new FormData();
    doct.append('ID_hospital', doctores.ID_hospital.toString());
    doct.append('Nombre',doctores.Nombre);
    doct.append('Especialidad',doctores.Especialidad);
    doct.append('Salario', doctores.Salario.toString());

    console.log(doct);
    return this.cliente.post(this.urlBase + 'insertar', doct);
  }
  actualizar(doctores: IDoctores, id:number): Observable<any> {
    var doct = new FormData();
    doct.append('ID_doctor', doctores.ID_doctor.toString());
    doct.append('ID_hospital', doctores.ID_hospital.toString());
    doct.append('Nombre',doctores.Nombre);
    doct.append('Especialidad',doctores.Especialidad);
    doct.append('Salario', doctores.Salario.toString());
    return this.cliente.post(this.urlBase + 'actualizar', doct);
  }
  eliminar(id: number): Observable<any> {
    var doct = new FormData();
    doct.append('ID_doctor', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', doct);
  }
}
