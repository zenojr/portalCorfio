import { Component, OnChanges, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatFormFieldControl, MatSelect, MatSnackBar } from '@angular/material';
import { DescontosService } from '../descontos.service';
import { Descontos } from './descontos.model';
import { FilterAdd } from './filterAdd.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.component.html',
  styleUrls: ['./descontos.component.css']
})
export class DescontosComponent implements OnInit, AfterViewInit {

  constructor( private descontosService: DescontosService, private el: ElementRef, private snackBar: MatSnackBar ) {
  }

  selectedOption: string;
  printedOption: string;

  filterAdd: string[] = [];

  date = new Date();
  descontos: Descontos[];
  user = this.descontosService.getUser();
  displayedColumns: string[] = ['codEstabel', 'uf' , 'regiao', 'contrib', 'fmFio',
  'fmParalelo', 'fmPp', 'fmFlex', 'fmCabo', 'fmNu', 'sufixoCv'];

  dataSource = new MatTableDataSource<Descontos>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild('filter') filter: ElementRef;

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }


  // applyFilter() {
  //   if ( this.filterAdd  != null ) {
  //     const filterAddString = this.filterAdd.toString().trim().toLowerCase();
  //     console.log(filterAddString);
  //     return this.dataSource.filter = filterAddString;
  //     // console.log(filterAddString);
  //   }
  // }

  ngOnInit() {
    this.getDescontosTable();
    // this.callFilterPredicate();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
// Filtros


  callFilterPredicate(){
    this.dataSource.filterPredicate = (data, filtro) => {
      const dataStr = data.codEstabel + data.uf;
      // console.log( dataStr );
      return dataStr.indexOf(filtro) != -1;
    }

    // this.dataSource.filterPredicate = function(data, filtro: string): boolean {
    //   console.log('Call: ' + filtro);
    //   // criar uma function para retornar os dados aqui
    //   let result =  data.regiao.trim().toLowerCase().includes(filtro)||
    //                 data.uf.toLowerCase().includes(filtro) ||
    //                 data.codEstabel.toString() === filtro;

    //                 console.log(result);
    //   return result;
    // };
  }

  applyFilter() {
    if ( this.filterAdd  != null ) {
      const filterAddString = this.filterAdd.toString().trim().toLowerCase();
      console.log('Apply FilterADDString: ' + filterAddString);
      return this.dataSource.filter = filterAddString;
      // console.log(filterAddString);
    }
  }

  addFiltro() {
    let selectRecebido = this.selectedOption;
    if( this.selectedOption !== null && this.selectedOption !== undefined ) {
      this.filterAdd.push(selectRecebido);
      console.log(this.filterAdd);
    } else {
        this.snackBar.open( 'Filtro Vazio', '[x]Fechar', {
          duration: 2000,
        });
    }
    selectRecebido = null;
    this.selectedOption = null;
  }

  filtro() {
    this.callFilterPredicate();
    this.applyFilter();
  }

  limpaFiltro(){
    this.printedOption = null;
    this.selectedOption = null;
    this.filterAdd = [];
    this.applyFilter();
    this.snackBar.open( 'Filtro limpo com Sucesso!', '[x]Fechar', {
      duration: 2000,
    });
  }

// Filtros FIM

  getDescontosTable(): void {
    this.descontosService.getDescontos()
    .subscribe(data => {
      this.dataSource.data = data['ttDesc'];
    });
  }
}
