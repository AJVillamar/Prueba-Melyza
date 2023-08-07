import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-delete-datos',
  templateUrl: './delete-datos.component.html',
  styleUrls: ['./delete-datos.component.css']
})
export class DeleteDatosComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteDatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatos,
    private _datosServices: DatosService
  ){ }

  eliminarDatos(){
    this._datosServices.eliminar(this.data.id);
    this.dialogRef.close("Eliminado");
  }
}
