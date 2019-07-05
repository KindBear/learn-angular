import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  LayoutModule,
];

@NgModule({
  exports: modules,
  imports: modules,
  providers: []
})
export class MaterialModule {
}
