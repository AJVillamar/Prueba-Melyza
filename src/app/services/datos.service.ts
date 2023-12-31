import { Injectable } from '@angular/core';
import { IDatos } from '../interfaces/idatos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  datos: IDatos[] = [
    {id: 1, user: "Angelo", password: "Villamar", nombres: 'Angelo Jahir', estado: true},
    {id: 2, user: "Anow", password: "Villamar", nombres: 'Angelo Jr', estado: true},
    {id: 3, user: "A", password: "Villamar", nombres: 'Angelr', estado: true},
    {id: 4, user: "Ang", password: "Villamar", nombres: 'AngJahir', estado: true},
    {id: 5, user: "Angel", password: "Villamar", nombres: 'An Jahir', estado: true},
    {id: 6, user: "Ang", password: "Villamar", nombres: 'lo Jahir', estado: true},
  ]

  listDatos(){
    return this.datos.filter(elemento => elemento.estado===true);
  }

  add(newDato: IDatos){
    this.datos.push(newDato)
  }

  update(updateDato: IDatos){
    this.datos.forEach(elemento => {
      if (elemento.id === updateDato.id) {
        Object.assign(elemento, updateDato);        
      }
    });
  }

  eliminar(id: number){
    this.datos.forEach(elemento => {
      if (elemento.id === id) {
        elemento.estado = false;
      }
    });
  }
}
