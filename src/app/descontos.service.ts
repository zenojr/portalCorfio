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
  private descontosURL = 'http://portal.corfio.com.br:8081/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040041.p?usuario=';

  constructor( private http: HttpClient) {
    console.log('APP Run! -- PROD');
    console.log( 'BASE ' + this.wservice );
  }

  getdataCabecalho() {
    return this.http.get<any>(this.descontosURL + this.user);
  }

  getDescontos(): Observable<Descontos[]> {
    const headers = new HttpHeaders();
    return this.http.get<Descontos[]>(this.descontosURL + this.user , {headers});
  }

  getUser() {
    return window.location.search.substring(6);
  }

  getBase() {
    return window.location.search.substring(6);
  }

 

}
