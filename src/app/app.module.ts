import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DisplayPage } from '../pages/display/display';
import { NewsProvider } from '../providers/news/news';
import { NewsReaderPage } from '../pages/news-reader/news-reader';
import { NewsVidzPage } from '../pages/news-vidz/news-vidz';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DisplayPage,
    NewsReaderPage,
    NewsVidzPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DisplayPage,
    NewsReaderPage,
    NewsVidzPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}
