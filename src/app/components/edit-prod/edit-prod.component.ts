import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosproductosService } from 'src/app/services/datosproductos.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.css']
})
export class EditProdComponent implements OnInit{
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _datosProductosService: DatosproductosService,
    private dialogRef: MatDialogRef<EditProdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosProductos,
    ) {
     this.form = this.fb.group({
      nombre:         ['', Validators.required],
      proveedor:     ['', Validators.required],
      cantidad:      ['', Validators.required],
      precio:      ['', Validators.required]
       })

  }
  ngOnInit() {
    console.log(this.data)
    this.form.patchValue({
      
      nombre: this.data.nombre,
      proveedor: this.data.proveedor,
      cantidad: this.data.cantidad,
      precio: this.data.precio
    })
  }

  edit(){
    if(this.form.invalid){
      this._snackBar.open('Campos vacíos', 'Error', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      return
    }

    const newDatosProd: IDatosProductos = {
      id:         this.data.id,
      nombre:       this.form.value.nombre,
      proveedor:   this.form.value.proveedor,
      cantidad:    this.form.value.cantidad,
      precio:    this.form.value.precio,
      estado:     true
    }

    this._datosProductosService.update(newDatosProd)    
    this.form.reset()    
    this.dialogRef.close("Exito");
}
}