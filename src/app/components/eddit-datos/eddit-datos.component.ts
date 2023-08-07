import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-eddit-datos',
  templateUrl: './eddit-datos.component.html',
  styleUrls: ['./eddit-datos.component.css']
})
export class EdditDatosComponent implements OnInit{
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _datosServices: DatosService,
    private dialogRef: MatDialogRef<EdditDatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatos,
  ) {
    this.form = this.fb.group({
      user:         ['', Validators.required],
      password:     ['', Validators.required],
      nombres:      ['', Validators.required]
    })
  }

  ngOnInit() {
    this.form.patchValue({
      user: this.data.user,
      password: this.data.password,
      nombres: this.data.nombres
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

    const newDatos: IDatos = {
      id:         this.data.id,
      user:       this.form.value.user,
      password:   this.form.value.password,
      nombres:    this.form.value.nombres,
      estado:     true
    }

    this._datosServices.update(newDatos)    
    this.form.reset()    
    this.dialogRef.close("Exito");
    
  }
}
