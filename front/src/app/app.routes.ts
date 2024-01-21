import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HospitalesComponent } from './views/hospitales/hospitales.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DoctoresComponent } from './views/doctores/doctores.component';
import { NuevoHospitalComponent } from './views/hospitales/nuevo-hospital/nuevo-hospital.component';
import { NuevoStocksComponent} from './views/doctores/nuevo-doctor/nuevo-doctor.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'hospitales', 
  component: HospitalesComponent },

  { path: 'nuevo-hospital', 
  component: NuevoHospitalComponent },

  {
    path: 'editar-hospital/:id',
    component: NuevoHospitalComponent,
  },

  {
    path: 'doctores',
    component: DoctoresComponent,
  },
  {
    path: 'nuevo-doctor',
    component: NuevoStocksComponent,
  },
  {
    path: 'editar-doctor/:id',
    component: NuevoStocksComponent,
  },
  
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
