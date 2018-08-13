import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessDisplayPage } from './business-display';

@NgModule({
  declarations: [
    BusinessDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessDisplayPage),
  ],
})
export class BusinessDisplayPageModule {}
