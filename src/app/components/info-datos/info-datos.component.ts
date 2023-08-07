import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDatos } from 'src/app/interfaces/idatos';

@Component({
  selector: 'app-info-datos',
  templateUrl: './info-datos.component.html',
  styleUrls: ['./info-datos.component.css']
})
export class InfoDatosComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<InfoDatosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatos,
  ) { }
  
  ngOnInit(): void {
    console.log(this.data);    
  }

}
