import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatFormFieldModule, MatInputModule, MatGridListModule,
MatToolbarModule, MatSelectModule, MatSnackBarModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule
  ],
  exports: [
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule
  ]
})
export class MaterialModule { }
