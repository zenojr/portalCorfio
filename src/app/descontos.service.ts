import { Select } from './descontosv2/select.model';
import { Injectable } from '@angular/core';
import { Descontos } from './descontos/descontos.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DescontosService {
  private user =  window.location.search.substring(6);
  private descontosURL = 'http://portal.corfio.com.br:8081/cgi-bin/wspd_cgi.sh/WService=corfio/wep/we0040041.p?usuario=';

  constructor( private http: HttpClient) {
    console.log('APP Run! -- PROD');
  }

  getdataCabecalho() {
    return this.http.get<any>(this.descontosURL + this.user);
  }

  getDescontos(): Observable<Descontos[]> {
    const headers = new HttpHeaders();
    console.log('headers' + `${headers}`);
    return this.http.get<Descontos[]>(this.descontosURL + this.user , {headers});
  }

  getSelectsUser(user): Observable<Select[]> {
    const headers = new HttpHeaders();
    return this.http.get<Select[]>(this.descontosURL + user , {headers});
  }

  getUser() {
    return window.location.search.substring(6);
  }

  getBase() {
    return document.URL.slice(62, 64);
  }

}
