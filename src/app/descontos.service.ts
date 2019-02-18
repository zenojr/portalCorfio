import { Injectable } from '@angular/core';
import { Descontos } from './descontos/descontos.model';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DescontosService {
  private user =  window.location.search.substring(6);
  private descontosURL = 'http://192.168.0.7:8080/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040041.p?usuario=';

  constructor( private http: HttpClient, private cookieService: CookieService ) {
    console.log('Desc service run!');
  }

  getdataCabecalho() {
    return this.http.get<any>(this.descontosURL + this.user);
  }

  getDescontos(): Observable<Descontos[]> {
    let headers = new HttpHeaders();
    return this.http.get<Descontos[]>(this.descontosURL + this.user , {headers});
  }

  getUser() {
    return window.location.search.substring(6);
  }


 


}
