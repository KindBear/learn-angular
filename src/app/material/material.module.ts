import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRippleModule,
  MatMenuModule, MatPaginatorModule, MatTabsModule, MatRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatStepperModule,
  MatSnackBarModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatProgressBarModule,
  LayoutModule,
  MatTableModule,
  MatTooltipModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTabsModule,
  MatRippleModule,
  MatRadioModule,
];

@NgModule({
  exports: modules,
  imports: modules,
  providers: []
})
export class MaterialModule {
}
