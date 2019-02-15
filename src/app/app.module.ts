import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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




@NgModule({
  declarations: [
    AppComponent,
    DescontosComponent,
    DescontosPipe
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
    HttpModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    DescontosService,
    CookieService,
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
