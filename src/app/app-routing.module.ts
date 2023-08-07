import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TablaProdComponent } from './components/tabla-prod/tabla-prod.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'producto',  component: ProductoComponent},    
  {path: 'tablaProduc', component: TablaProdComponent}        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
