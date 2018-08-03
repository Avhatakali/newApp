import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsReaderPage } from './news-reader';

@NgModule({
  declarations: [
    NewsReaderPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsReaderPage),
  ],
})
export class NewsReaderPageModule {}
