import { Injectable } from '@angular/core';
import { IDatosProductos } from '../interfaces/i-datos-productos';

@Injectable({
  providedIn: 'root'
})
export class DatosproductosService {


  constructor() { }

   datosprod: IDatosProductos[] = [
    
      {id:1, nombre:"Maria",proveedor: "Papelesa", cantidad: 1, precio:15, estado: true }
    ]
  
    add(newDatosProd:IDatosProductos){
      this.datosprod.push(newDatosProd)
    }

  }

