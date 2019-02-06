import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatFormFieldControl } from '@angular/material';
import { DescontosService } from '../descontos.service';
import { Descontos } from './descontos';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable} from 'rxjs';
import { DescontosPipe } from './pipes/descontos.pipe';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.component.html',
  styleUrls: ['./descontos.component.css']
})
export class DescontosComponent implements OnInit, AfterViewInit {


  constructor( private descontosService: DescontosService, private cookieService: CookieService ) {
    this.getDescontos();
  }

  descontos: Descontos[];
  cookieValue: {} = 'UNKNOWN';

  displayedColumns: string[] = ['codEstabel', 'uf', 'regiao', 'fmCodigo', 'codCanalVenda', 'contribIcms', 'sufixoCv', 'desconto'];
  dataSource = new MatTableDataSource<Descontos>();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    // console.log( this.dataSource );
    this.descontosService.getStorage();
  }

  ngAfterViewInit() {

  }


  getDescontos(): void {
    this.descontosService.getDescontos()
    .subscribe(data => {
      this.dataSource.data = data['ttDesc'];
    }
    );
  }

}
