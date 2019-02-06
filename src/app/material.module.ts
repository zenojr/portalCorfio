import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatFormFieldModule, MatInputModule, MatGridListModule, MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule
  ],
  exports: [
	MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
	MatToolbarModule
  ]
})
export class MaterialModule { }
