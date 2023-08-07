import { Injectable } from '@angular/core';
import { IDatosProductos } from '../interfaces/i-datos-productos';

@Injectable({
  providedIn: 'root'
})
export class DatosproductosService {


  constructor() { }

   datosprod: IDatosProductos[] = [
    
      {id:1, nombre:"Maria",proveedor: "Papelesa", cantidad: 1, precio:15, estado: true},
      {id:1, nombre:"Maite",proveedor: "Papelesa", cantidad: 5, precio:18, estado: true},
      {id:1, nombre:"Melany",proveedor: "Papelesa", cantidad: 4, precio:20, estado: true},
      {id:1, nombre:"Bryan",proveedor: "Papelesa", cantidad: 10, precio:35, estado: true}
    ]
  
    add(newDatosProd:IDatosProductos){
      this.datosprod.push(newDatosProd)
    }

  }

