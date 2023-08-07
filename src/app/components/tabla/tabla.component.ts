import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';
import { InfoDatosComponent } from '../info-datos/info-datos.component';
import { EdditDatosComponent } from '../eddit-datos/eddit-datos.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteDatosComponent } from '../delete-datos/delete-datos.component';
import { EliminarDatosComponent } from '../eliminar-datos/eliminar-datos.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  
  displayedColumns: string[] = ['nombres', 'user', 'acciones'];
  dataSource = new MatTableDataSource<IDatos>();

  constructor(
    private _datosService: DatosService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {  
  }

  ngOnInit(){
    this.mostrarDatos()
  }

  //Configuraciones del paginador y del ordenamiento
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  mostrarDatos(){
    this.dataSource.data =  this._datosService.listDatos();
  }

  mostrar(data: IDatos){
    this.dialog.open(InfoDatosComponent,{
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: data 
    })
  }

  editar(datos: IDatos){
    this.dialog.open(EdditDatosComponent, {
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: datos
    }).afterClosed().subscribe(
    (recibo) => {
      if(recibo == "Exito"){
        this.mostrarDatos();        
        this._snackBar.open("Actualizado","Bien")    
        return
      }
      this._snackBar.open("Lo sentimos","Error")   
    }) 
  }

  eliminar(datos: IDatos){
    this.dialog.open(EliminarDatosComponent, {
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: datos
    }).afterClosed().subscribe(
    (recibo) => {
      if(recibo == "Eliminado"){
        this.mostrarDatos();        
        this._snackBar.open("Eliminado","Bien")    
        return
      }
      this._snackBar.open("Lo sentimos","Error")   
    }) 
  }  
}
