import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CommonLayoutComponent],
  imports: [CommonModule],
  exports: [CommonLayoutComponent],
})
export class LayoutsModule {}
