import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './views/productos/productos.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { StocksComponent } from './views/stocks/stocks.component';
import { NuevoProductoComponent } from './views/productos/nuevo.producto/nuevo-producto.component';
import { NuevoStocksComponent } from './views/stocks/nuevo-stocks/nuevo-stocks.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'productos', 
  component: ProductosComponent },

  { path: 'nuevo-producto', 
  component: NuevoProductoComponent },

  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },

  {
    path: 'stocks',
    component: StocksComponent,
  },
  {
    path: 'nueva-venta',
    component: NuevoStocksComponent,
  },
  {
    path: 'editar-venta/:id',
    component: NuevoStocksComponent,
  },
  
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
