import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { NewsReaderPage } from '../pages/news-reader/news-reader';
import { NewsVidzPage } from '../pages/news-vidz/news-vidz';
import { TopstoriesPage } from '../pages/topstories/topstories';
import { SouthPage } from '../pages/south/south';
import { SportsPage } from '../pages/sports/sports';
import { PoliticsPage } from '../pages/politics/politics';
import { AfricaPage } from '../pages/africa/africa';
import { WorldPage } from '../pages/world/world';
import { BusinessPage } from '../pages/business/business';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Topstories', component: TopstoriesPage },
      { title: 'South Africa', component: SouthPage },
      { title: 'Africa', component: AfricaPage },
      { title: 'world', component: WorldPage },
      { title: 'Sports', component: SportsPage },
      { title: 'Politics', component: PoliticsPage },
      { title: 'Business', component: BusinessPage },
      { title: 'video', component: NewsVidzPage },
     

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
