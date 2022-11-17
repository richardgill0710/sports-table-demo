import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/modules/material-components/material-components.module';
import { SportResultTableComponent } from 'src/app/components/sport-result-table/sport-result-table.component';
import { SportResultComponent } from './sport-result.component';

@NgModule({
  declarations: [SportResultComponent, SportResultTableComponent],
  imports: [CommonModule, MaterialComponentsModule],
  exports: [SportResultComponent],
})
export class SportResultModule {}
