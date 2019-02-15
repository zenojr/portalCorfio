import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatFormFieldControl } from '@angular/material';
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
  dataAtual = new Date();
  dataCabecalho: [];
  descontos: Descontos[];
  user = this.descontosService.getUser();
  displayedColumns: string[] = ['codEstabel', 'uf' , 'regiao', 'contrib', 'fmFio', 'fmParalelo', 'fmPp', 'fmFlex', 'fmCabo', 'fmNu'];
  dataSource = new MatTableDataSource<Descontos>();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getDescontosTable();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.getDataCadecalho();
  }

  getDataCadecalho() {
    return this.descontosService.getdataCabecalho().subscribe(
      data => {this.dataCabecalho = data,
      console.log(this.dataCabecalho);
      }
    );
  }

  getDescontosTable(): void {
    this.descontosService.getDescontos()
    .subscribe(data => {
      this.dataSource.data = data['ttDesc'];
    });
  }


}
