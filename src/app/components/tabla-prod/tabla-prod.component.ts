import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDatosProductos } from 'src/app/interfaces/i-datos-productos';
import { DatosproductosService } from 'src/app/services/datosproductos.service';

@Component({
  selector: 'app-tabla-prod',
  templateUrl: './tabla-prod.component.html',
  styleUrls: ['./tabla-prod.component.css']
})
export class TablaProdComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'proveedor', 'cantidad', 'precio', 'acciones'];
  dataSource = new MatTableDataSource<IDatosProductos>();


  constructor(
    private _datosProductosService: DatosproductosService
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
    this.dataSource.data = this._datosProductosService.datosprod
  }

  buscar(id: number){
    console.log(id);
  }
  
  agregarProductos(){

  }

}
