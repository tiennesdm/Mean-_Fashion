import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
@NgModule({
  exports : [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule
  ]
})
export class AngularMaterialForm{}
