import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModule {}
