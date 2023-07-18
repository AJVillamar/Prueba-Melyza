import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDatos } from 'src/app/interfaces/idatos';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  
  displayedColumns: string[] = ['nombres', 'user', 'acciones'];
  dataSource = new MatTableDataSource<IDatos>();

  constructor(
    private _datosService: DatosService  
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
    this.dataSource.data =  this._datosService.datos
  }


  buscar(id: number){
    console.log(id);
    
  }
}
