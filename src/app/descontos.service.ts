import { Injectable } from '@angular/core';
import { Descontos } from './descontos/descontos.model';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DescontosService {
  private user =  window.location.search.substring(6);
  private wservice = window.location.search.substring(20);
  private descontosURL = '';
  // private descontosURL = 'http://portal.corfio.com.br:8081/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040041.p?usuario=';


  constructor( private http: HttpClient) {
    console.log('APP Run! -- PROD');
  }

  getdataCabecalho() {
    return this.http.get<any>(this.descontosURL + this.user);
  }

  getDescontos(): Observable<Descontos[]> {
    let urlQuery = document.URL.slice(62, 68);
    if ( urlQuery === 'corfio' ) {
      console.log('baseCorfio');
    } else {
      console.log( 'baseHomologa' );
    }
    console.log('GetURL dentro da funcao getdesc' + urlQuery);
    const headers = new HttpHeaders();
    return this.http.get<Descontos[]>(this.descontosURL + this.user , {headers});
  }

  getUser() {
    return window.location.search.substring(6);
  }

  getBase() {
    
    return document.URL.slice(62, 64);
  }

 

}
