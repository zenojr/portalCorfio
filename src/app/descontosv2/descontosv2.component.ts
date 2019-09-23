import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-descontosv2',
  templateUrl: './descontosv2.component.html',
  styleUrls: ['./descontosv2.component.css']
})
export class Descontosv2Component implements OnInit {

  data = new Date();
  estab = new FormControl('');
  uf = new FormControl('');
  regiao = new FormControl('');
  numTable = new FormControl('');


  formQuery: FormGroup;

  constructor(public breakPointObserver: BreakpointObserver, private _formBuilder: FormBuilder) { }
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;


  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
}
