import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospital } from '../Interfaces/hospital';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private urlBase: string =
  'http://localhost:/evaluacion2p/Inventario/Controllers/productos.controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IHospital[]> {
    return this.clientePhp.get<IHospital[]>(this.urlBase + 'todos');
  }
  insertar(hospitales: IHospital): Observable<any> {
    var hosp = new FormData();
    hosp.append('Nombre', hospitales.Nombre);
    hosp.append('Ciudad', hospitales.Ciudad.toString());
    hosp.append('Numero_camas', hospitales.Numero_camas.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', hosp);
  }
  eliminar(id: number): Observable<any> {
    var hosp = new FormData();
    hosp.append('ID_hospital', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', hosp);
  }
  uno(id: number): Observable<IHospital> {
    var hosp = new FormData();
    hosp.append('ID_hospital', id.toString());
    return this.clientePhp.post<IHospital>(this.urlBase + 'uno', hosp);
  }
  actualizar(hospitales: IHospital, id: number): Observable<any> {
    var hosp = new FormData();
    hosp.append('ID_hospital', id.toString());
    hosp.append('Nombre', hospitales.Nombre);
    hosp.append('Ciudad', hospitales.Ciudad.toString());
    hosp.append('Numero_camas', hospitales.Numero_camas.toString());
   
    return this.clientePhp.post(this.urlBase + 'actualizar', hosp);
  }
  
}
