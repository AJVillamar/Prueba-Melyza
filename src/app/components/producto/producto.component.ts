
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosproductosService } from 'src/app/services/datosproductos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _datosproductosService: DatosproductosService
    ){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      proveedor: ['', Validators.required],
      cantidad: ['',Validators.required],
      precio: ['', Validators.required]
    })
  

  }

  add(){
    if(this.form.invalid){
      this._snackBar.open('Llenar todos los campos','Error', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      return 
    }
 
 
    const newDatosProd: IDatosProductos = {
      id:       this._datosproductosService.datosprod.length+1,
      nombre:   this.form .value.nombre,
      proveedor:this.form .value.proveedor,
      cantidad: this.form .value.cantidad,
      precio:   this.form .value.precio,
      estado:   true,


    }
    this._datosproductosService.add(newDatosProd)
    console.log(this._datosproductosService.datosprod);
    this.form.reset()
  }
}
