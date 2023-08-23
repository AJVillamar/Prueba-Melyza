import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosproductosService } from 'src/app/services/datosproductos.service';

@Component({
  selector: 'app-delete-produc',
  templateUrl: './delete-produc.component.html',
  styleUrls: ['./delete-produc.component.css']
})
export class DeleteProducComponent {


  constructor(
    private dialogRef: MatDialogRef<DeleteProducComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosProductos,
    private _datosServices: DatosproductosService
  ){ }

  eliminarDatosProd(){
    this._datosServices.eliminar(this.data.id);
    this.dialogRef.close("Eliminado");
  }
}

