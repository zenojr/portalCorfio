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

  estabVdaFilter = new FormControl('');
  ufFilter = new FormControl('');
  regiaoFilter = new FormControl('');
  contribFilter = new FormControl('');
  tabFilter = new FormControl('');

  filterValues = {
    codEstabel: '',
    contrib: '',
    uf: '',
    regiao: '',
    sufixoCv: ''
  }

  constructor( private descontosService: DescontosService, private el: ElementRef, private snackBar: MatSnackBar ) {
    this.dataSource.filterPredicate = this.createFilter();
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

    // filter codEstabel
    this.estabVdaFilter.valueChanges
    .subscribe(
      codEstabel => {
        this.filterValues.codEstabel = codEstabel;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );

    // filter UF
    this.ufFilter.valueChanges
    .subscribe(
      uf => {
        this.filterValues.uf = uf;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );

    // filter Regiao
    this.regiaoFilter.valueChanges
    .subscribe(
      regiao => {
        this.filterValues.regiao = regiao;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );

    // filter Contrib
    this.contribFilter.valueChanges
    .subscribe(
      contrib => {
        this.filterValues.contrib = contrib;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );

    // filter Tab
    this.tabFilter.valueChanges
    .subscribe(
      sufixoCv => {
        this.filterValues.sufixoCv = sufixoCv;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
// Filtros
  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.codEstabel.toLowerCase().indexOf(searchTerms.codEstabel) !== -1
          && data.uf.toLowerCase().indexOf(searchTerms.uf) !== -1
          && data.regiao.toLowerCase().indexOf(searchTerms.regiao) !== -1
          && data.contrib.toString().toLowerCase().indexOf(searchTerms.contrib) !== -1
          && data.sufixoCv.toLowerCase().indexOf(searchTerms.sufixoCv) !== -1 ;
    };
    return filterFunction;
  }

// Filtros FIM

  getDescontosTable(): void {
    this.descontosService.getDescontos()
    .subscribe(data => {
      this.dataSource.data = data['ttDesc'];
    });
  }
}
