import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { TablaProdComponent } from './components/tabla-prod/tabla-prod.component';
import { InfoDatosComponent } from './components/info-datos/info-datos.component';
import { EdditDatosComponent } from './components/eddit-datos/eddit-datos.component';
import { DeleteDatosComponent } from './components/delete-datos/delete-datos.component';
import { EliminarDatosComponent } from './components/eliminar-datos/eliminar-datos.component';
import { infoproductComponent } from './components/infoproduct/infoproduct.component';
import { EditProdComponent } from './components/edit-prod/edit-prod.component';
import { DeleteProducComponent } from './components/delete-produc/delete-produc.component';
import { EliminarDatosProdComponent } from './components/eliminar-datos-prod/eliminar-datos-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaComponent,
    NavMenuComponent,
    FooterComponent,
    ProductoComponent,
    TablaProdComponent,
    InfoDatosComponent,
    EdditDatosComponent,
    DeleteDatosComponent,
    EliminarDatosComponent,
    infoproductComponent,
    EditProdComponent,
    DeleteProducComponent,
    EliminarDatosProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
