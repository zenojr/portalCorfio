import { Component, OnChanges, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatFormFieldControl, MatSelect, MatSnackBar } from '@angular/material';
import { DescontosService } from '../descontos.service';
import { Descontos } from './descontos.model';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable} from 'rxjs';
import { DescontosPipe } from './pipes/descontos.pipe';


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

  selectedOptionEstabVenda: string;
  printedOptionEstabVenda: string;

  date = new Date();
  dataCabecalho: [];
  descontos: Descontos[];
  user = this.descontosService.getUser();
  displayedColumns: string[] = ['codEstabel', 'uf' , 'regiao', 'contrib', 'fmFio',
  'fmParalelo', 'fmPp', 'fmFlex', 'fmCabo', 'fmNu', 'sufixoCv'];

  dataSource = new MatTableDataSource<Descontos>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  applyFilter() {
    if ( this.selectedOption  != null ) {
      this.dataSource.filter = this.selectedOption.trim().toLowerCase();
    }
  }

  ngOnInit() {
    this.getDescontosTable();
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return  data.codEstabel.toString() === filter ||
              data.regiao.trim().toLowerCase().includes(filter) ||
              data.uf.toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: Descontos): void {
  
  }
// Filtros


  filtro() {
    this.printedOption = this.selectedOption;
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

  addFiltro(){
    let selectRecebido = this.selectedOption;
    if( this.selectedOption !== null && this.selectedOption !== undefined ) {
      this.filterAdd.push(selectRecebido);
      console.log(this.filterAdd);
      selectRecebido = null;
      this.selectedOption = null;
    } else {
        this.snackBar.open( 'Filtro Vazio', '[x]Fechar', {
          duration: 2000,
        });
    }
    
  }

// Filtros FIM

  teste(value: string){
    const data = this.dataSource.filter = value.trim().toLowerCase();
    console.log('clicou');
    console.log(data);
  }
  // getDataCadecalho() {
  //   return this.descontosService.getdataCabecalho().subscribe(
  //     data => {this.dataCabecalho = data,
  //     console.log(this.dataCabecalho);
  //     }
  //   );
  // }

  getDescontosTable(): void {
    this.descontosService.getDescontos()
    .subscribe(data => {
      this.dataSource.data = data['ttDesc'];
    });
  }
}
