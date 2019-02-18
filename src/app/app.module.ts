import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// REGIONALIZACAO DA APP
import {NgModule, LOCALE_ID} from '@angular/core';
import localept from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
registerLocaleData(localept, 'pt');

// my imports
import { FormsModule } from '@angular/forms'
import { HttpModule, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatTableModule, MatSortModule, MatCardModule, MatSort, MatTableDataSource, MatPaginatorModule } from '@angular/material';
import { DescontosComponent } from './descontos/descontos.component';
import { DescontosService } from './descontos.service';
import { DescontosPipe } from './descontos/pipes/descontos.pipe';
import { CookieService } from 'ngx-cookie-service';
import { FiltroPorEstabelecimentoPipe } from './descontos/pipes/filtro-por-estabelecimento.pipe';
import { LimpaSufixoCvPipe } from './descontos/pipes/limpa-sufixo-cv.pipe';
import { GroupByPipe } from './descontos/pipes/group-by.pipe';
import { GroupByCodEstabelPipe } from './descontos/pipes/group-by-cod-estabel.pipe';
import { GroupByContribPipe } from './descontos/pipes/group-by-contrib.pipe';
import { GroupByUFPipe } from './descontos/pipes/group-by-uf.pipe';
import { GroupByRegiaoPipe } from './descontos/pipes/group-by-regiao.pipe';
import { GroupByNumeroTabPipe } from './descontos/pipes/group-by-numero-tab.pipe';






@NgModule({
  declarations: [
    AppComponent,
    DescontosComponent,
    DescontosPipe,
    FiltroPorEstabelecimentoPipe,
    LimpaSufixoCvPipe,
    GroupByPipe,
    GroupByCodEstabelPipe,
    GroupByContribPipe,
    GroupByUFPipe,
    GroupByRegiaoPipe,
    GroupByNumeroTabPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    DescontosService,
    CookieService,
    { provide: LOCALE_ID, useValue: "pt" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
