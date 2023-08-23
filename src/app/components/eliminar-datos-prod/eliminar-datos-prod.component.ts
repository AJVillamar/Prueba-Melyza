import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-eliminar-datos-prod',
  templateUrl: './eliminar-datos-prod.component.html',
  styleUrls: ['./eliminar-datos-prod.component.css']
})
export class EliminarDatosProdComponent {
  
  constructor(
    private dialogRef: MatDialogRef<EliminarDatosProdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosProductos,
    private _datosServices: DatosService
  ){ }

  eliminarDatosProd(){
    this._datosServices.eliminar(this.data.id);
    this.dialogRef.close("Eliminado");
  }
}
