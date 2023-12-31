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

    listDatosP(){
      return this.datosprod.filter(elemento => elemento.estado===true);
    }
  
    add(newDatosProd:IDatosProductos){
      this.datosprod.push(newDatosProd)
    }

    update(updateDato: IDatosProductos) {
      this.datosprod.forEach(elementos => {
        if(elementos.id === updateDato.id){
          Object.assign(elementos, updateDato);

        }
      });
    }
    eliminar(id: number){
      this.datosprod.forEach(elemento => {
        if (elemento.id === id) {
          elemento.estado = false;
        }
      });
    }

  }

