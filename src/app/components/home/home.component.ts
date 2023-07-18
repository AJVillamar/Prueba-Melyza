import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _datosServices: DatosService
  ) {
    this.form = this.fb.group({
      user:         ['', Validators.required],
      password:     ['', Validators.required],
      nombres:      ['', Validators.required]
    })
  }

  add(){
    if(this.form.invalid){
      this._snackBar.open('Campos vacíos', 'Error', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      return
    }

    const newDatos: IDatos = {
      id:         this._datosServices.datos.length+1,
      user:       this.form.value.user,
      password:   this.form.value.password,
      nombres:    this.form.value.nombres,
      estado:     true
    }

    this._datosServices.add(newDatos)    
    this.form.reset()    
    console.log(this._datosServices.datos);
    
  }
}
