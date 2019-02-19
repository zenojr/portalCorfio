import { Component, OnChanges, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatFormFieldControl, MatSelect } from '@angular/material';
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

  constructor( private descontosService: DescontosService ) {
  }

  selectedOption: string;
  printedOption: string;

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
    this.dataSource.filter = this.selectedOption.trim().toLowerCase();
    console.log(this.dataSource);
  }

  ngOnInit() {
    this.getDescontosTable();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: Descontos): void {
    console.log(changes); 
    
  }

  print() {
    this.printedOption = this.selectedOption;
    this.applyFilter();
  }

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
