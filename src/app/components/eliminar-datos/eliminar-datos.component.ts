import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-eliminar-datos',
  templateUrl: './eliminar-datos.component.html',
  styleUrls: ['./eliminar-datos.component.css']
})
export class EliminarDatosComponent {
  constructor(
    private dialogRef: MatDialogRef<EliminarDatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatos,
    private _datosServices: DatosService
  ){ }

  eliminarDatos(){
    this._datosServices.eliminar(this.data.id);
    this.dialogRef.close("Eliminado");
  }
}
