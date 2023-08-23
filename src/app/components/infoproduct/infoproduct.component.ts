import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InfoDatosComponent } from '../info-datos/info-datos.component';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';

@Component({
  selector: 'app-infoproduct',
  templateUrl: './infoproduct.component.html',
  styleUrls: ['./infoproduct.component.css']
})
export class infoproductComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<infoproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosProductos,
  ) { }
  
  ngOnInit(): void {
    console.log(this.data);    
  }
  
  openDialog(){
    
  }

}
