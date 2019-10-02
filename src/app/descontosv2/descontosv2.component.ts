import { Descontos } from './../descontos/descontos.model';
import { HttpClient } from '@angular/common/http';
import { Select } from './select.model';
import { Observable, Subscriber, observable, from } from 'rxjs';
import { DescontosService } from './../descontos.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-descontosv2',
  templateUrl: './descontosv2.component.html',
  styleUrls: ['./descontosv2.component.css']
})
export class Descontosv2Component implements OnInit {

  private user =  'zeno';
  private descontosURL = 'http://portal.corfio.com.br:8081/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040041.p?usuario=zeno';

  dados: Select[];
  descontos: Descontos[];

      data = new Date();
     estab = new FormControl('');
        uf = new FormControl('');
    regiao = new FormControl('');
  numTable = new FormControl('');

  formQuery: FormGroup;
  loader = true;
  constructor(public  breakPointObserver: BreakpointObserver,
              private       _formBuilder: FormBuilder,
              private   descontosService: DescontosService,
              private               http: HttpClient) { }

  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    // this.sendQuery();
    // this.teste();
    this.getDescontosObs();

  }

  getDescontosObs(): void {
    // this.descontosService.newGetDescontos()
    //     .subscribe(descontos => this.descontos = descontos['ttDesc']);



    this.descontosService.newGetDescontos()
        .subscribe( descontos => {this.descontos = descontos['ttDesc'];
                                  console.log('complete');
                                  this.loader = false; });


        // observable.subscribe({
        //   next(x) { console.log('got value ' + x); },
        //   error(err) { console.error('something wrong occurred: ' + err); },
        //   complete() { console.log('done'); }
        // });
  }

  teste() {
    const data = this.http.get(this.descontosURL);
    data.subscribe({
      next(res) { console.log(res); },
      error(err) { console.error(err); },
      complete() { console.log('Complete'); }
    });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  sendQuery() {
    const obs = new Observable( subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1500);
    } );

    obs.subscribe({
      next(x) {console.log('out value' + x); },
      error(err) { console.error('error', err); },
      complete() { console.log('finish'); }
    });
  }
}

