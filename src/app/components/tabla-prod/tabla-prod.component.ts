import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosproductosService } from 'src/app/services/datosproductos.service';
import { infoproductComponent } from '../infoproduct/infoproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProdComponent } from '../edit-prod/edit-prod.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EliminarDatosProdComponent } from '../eliminar-datos-prod/eliminar-datos-prod.component';

@Component({
  selector: 'app-tabla-prod',
  templateUrl: './tabla-prod.component.html',
  styleUrls: ['./tabla-prod.component.css']
})
export class TablaProdComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'proveedor', 'cantidad', 'precio', 'acciones'];
  dataSource = new MatTableDataSource<IDatosProductos>();


  constructor(
    private _datosProductosService: DatosproductosService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){ }

  ngOnInit() {
    this.mostrarDatosProd()
  }

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

  mostrarDatosProd(){
    this.dataSource.data = this._datosProductosService.listDatosP();
  }

  mostrar(data: IDatosProductos){
    this.dialog.open(infoproductComponent,{
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: data 
    })
  }
  
  
  editar(datosprod: IDatosProductos){
    this.dialog.open(EditProdComponent, {
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: datosprod
    }).afterClosed().subscribe(
    (recibo) => {
      if(recibo == "Exito"){
        this.mostrarDatosProd();        
        this._snackBar.open("Actualizado","Bien")    
        return
      }
      this._snackBar.open("Lo sentimos","Error")   
    }) 
  }

  eliminar(datos: IDatosProductos){
    this.dialog.open(EliminarDatosProdComponent, {
      autoFocus: false,
      disableClose: false,
      width: 'auto',
      data: datos
    }).afterClosed().subscribe(
    (recibo) => {
      if(recibo == "Eliminado"){
        this.mostrarDatosProd();        
        this._snackBar.open("Eliminado","Bien")    
        return
      }
      this._snackBar.open("Lo sentimos","Error")   
    }) 
  }  


}

