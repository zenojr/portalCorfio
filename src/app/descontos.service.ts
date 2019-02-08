import { Injectable } from '@angular/core';
import { Descontos } from './descontos/descontos.model';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { User } from './descontos/user.model';

@Injectable({
  providedIn: 'root'
})
export class DescontosService {
  private descontosURL = 'http://192.168.0.7:8080/cgi-bin/wspd_cgi.sh/WService=corfio/wep/testeWeb.p';
  private userURL = '192.168.0.7/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040040.html';

  constructor( private http: HttpClient ) {
    console.log('Desc service run!');
  }

  getDescontos(): Observable<Descontos[]> {
    return this.http.get<Descontos[]>(this.descontosURL, { responseType: 'json' });
  }

  getUser() {
    const data = this.http.get<User[]>(this.userURL, { responseType: 'json' });
  }



}
