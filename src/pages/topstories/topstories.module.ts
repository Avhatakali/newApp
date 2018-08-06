import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopstoriesPage } from './topstories';

@NgModule({
  declarations: [
    TopstoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(TopstoriesPage),
  ],
})
export class TopstoriesPageModule {}
