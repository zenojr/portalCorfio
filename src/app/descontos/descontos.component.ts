import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { DescontosService } from '../descontos.service';
import { Descontos } from './descontos.model';
import { FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.component.html',
  styleUrls: ['./descontos.component.css']
})
export class DescontosComponent implements OnInit, AfterViewInit {

  constructor( public breakpointObserver: BreakpointObserver, private descontosService: DescontosService,
    private snackBar: MatSnackBar) {
      this.dataSource.filterPredicate = this.createFilter();
    }

    breakpoint: number;
    // CopyClipboard
    text1 = new FormControl('') ;
    text2: string;
    isCopied1: boolean;
    basic = false;

    // FILTROS
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
    };
    date = new Date();
    descontos: Descontos[];
    user = this.descontosService.getUser();
    base = this.descontosService.getBase();
    displayedColumns: string[] = ['codEstabel', 'uf', 'regiao', 'sufixoCv', 'nrTabpre', 'icms', 'fmFio', 'fmParalelo',
    'fmPp',
    'fmFlex',
    'fmCabo',
    'fmNu',
    'contrib',
    'descPri'
    ];

  dataSource = new MatTableDataSource<Descontos>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log(this.base);
    console.log(this.user);
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
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
        this.filterValues.uf = uf.toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );
    // filter Regiao
    this.regiaoFilter.valueChanges
    .subscribe(
      regiao => {
        this.filterValues.regiao = regiao.toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );
    // filter Contrib
    this.contribFilter.valueChanges
    .subscribe(
      contrib => {
        this.filterValues.contrib = contrib.toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );
    // filter Tab
    this.tabFilter.valueChanges
    .subscribe(
      sufixoCv => {
        // sufixoCv = sufixoCv.slice(0, 7);
        this.filterValues.sufixoCv = sufixoCv.toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  callServiceToCopy() {
    this.isCopied1 = true;
    this.snackBar.open( 'Família de produtos copiada com sucesso.', '[x]Fechar', {
       duration: 2000});
  }

  onCopyFailure() {
      alert('copy fail!');
  }

  // Filtros
  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function(data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.codEstabel.toLowerCase().indexOf(searchTerms.codEstabel) !== -1
      && data.uf.toLowerCase().indexOf(searchTerms.uf) !== -1
      && data.regiao.toLowerCase().indexOf(searchTerms.regiao) !== -1
      && data.contrib.toString().toLowerCase().indexOf(searchTerms.contrib) !== -1
      && data.sufixoCv.toLowerCase().indexOf(searchTerms.sufixoCv) !== -1 ;
    };
    return filterFunction;
  }

  limparFiltro() {
    this.estabVdaFilter.reset('');
    this.estabVdaFilter.reset('');
    this.ufFilter.reset('');
    this.regiaoFilter.reset('');
    this.contribFilter.reset('');
    this.tabFilter.reset('');
    this.snackBar.open( 'Filtro limpo com sucesso', '[x]Fechar', {
      duration: 2000});
    }
    // Filtros FIM

    // Get data from DB
    getDescontosTable(): void {
      this.descontosService.getDescontos()
      .subscribe(data => {
        if ( data['ttDesc'] != null ) {
          this.dataSource.data = data['ttDesc'];
        } else {
          console.log('Sem cadastro de região');
          alert('Representante sem cadastro de região!');
        }
      });
    }

    onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    }

  }
