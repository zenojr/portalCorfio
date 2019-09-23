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
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { DescontosComponent } from './descontos/descontos.component';
import { DescontosService } from './descontos.service';
import { DescontosPipe } from './descontos/pipes/descontos.pipe';

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
import { GroupByIcmsPipe } from './descontos/pipes/group-by-icms.pipe';
import { CommaPipe } from './descontos/pipes/comma.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Descontosv2Component } from './descontosv2/descontosv2.component';

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
    CommaPipe,
    Descontosv2Component
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DescontosService,
    { provide: LOCALE_ID, useValue: "pt" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
