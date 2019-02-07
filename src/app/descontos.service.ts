import { Injectable } from '@angular/core';
import { Descontos } from './descontos/descontos.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DescontosService {
  private descontosURL = 'http://192.168.0.7:8080/cgi-bin/wspd_cgi.sh/WService=corfio/wep/testeWeb.p';

  constructor( private http: HttpClient ) {
    console.log('Desc service run!');
  }

  getDescontos(): Observable<Descontos[]> {
    return this.http.get<Descontos[]>(this.descontosURL, { responseType: 'json' });
  }

  getUser(){
    return this.http.get(this.descontosURL, { responseType: 'json' });
  }

  createCookie() {
    // document.cookie = "username=zenoFromAngular";
    let colect = window.document.cookie;
    console.log(colect)
  }


}
