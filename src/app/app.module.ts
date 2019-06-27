import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// REGIONALIZACAO DA APP
import {NgModule, LOCALE_ID} from '@angular/core';
import localept from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
registerLocaleData(localept, 'pt');

// my imports
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatTableModule, MatSortModule, MatCardModule, MatSort, MatTableDataSource, MatPaginatorModule } from '@angular/material';
import { DescontosComponent } from './descontos/descontos.component';
import { DescontosService } from './descontos.service';
import { DescontosPipe } from './descontos/pipes/descontos.pipe';
import { CookieService } from 'ngx-cookie-service';
import { LimpaSufixoCvPipe } from './descontos/pipes/limpa-sufixo-cv.pipe';
import { GroupByPipe } from './descontos/pipes/group-by.pipe';
import { GroupByCodEstabelPipe } from './descontos/pipes/group-by-cod-estabel.pipe';
import { GroupByContribPipe } from './descontos/pipes/group-by-contrib.pipe';
import { GroupByUFPipe } from './descontos/pipes/group-by-uf.pipe';
import { GroupByRegiaoPipe } from './descontos/pipes/group-by-regiao.pipe';
import { GroupByNumeroTabPipe } from './descontos/pipes/group-by-numero-tab.pipe';
import { FiltroEstabPipe } from './descontos/pipes/filtro-estab.pipe';
import { LimpaSufixoSelectPipe } from './descontos/pipes/limpa-sufixo-select.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { GroupByIcmsPipe } from './descontos/pipes/group-by-icms.pipe';
import { CommaPipe } from './descontos/pipes/comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DescontosComponent,
    DescontosPipe,
    LimpaSufixoCvPipe,
    GroupByPipe,
    GroupByIcmsPipe,
    GroupByCodEstabelPipe,
    GroupByContribPipe,
    GroupByUFPipe,
    GroupByRegiaoPipe,
    GroupByNumeroTabPipe,
    FiltroEstabPipe,
    LimpaSufixoSelectPipe,
    CommaPipe
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
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ClipboardModule
  ],
  providers: [
    DescontosService,
    CookieService,
    { provide: LOCALE_ID, useValue: "pt" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
