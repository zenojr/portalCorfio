import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule, MatTableDataSource, MatFormFieldModule, MatInputModule, MatGridListModule,
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
  MatIconModule,
  MatProgressSpinnerModule
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
  MatIconModule,
  MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
