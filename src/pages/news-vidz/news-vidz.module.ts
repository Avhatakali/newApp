import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsVidzPage } from './news-vidz';

@NgModule({
  declarations: [
    NewsVidzPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsVidzPage),
  ],
})
export class NewsVidzPageModule {}
