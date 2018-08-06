import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  // selectedItem: any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   // If we navigated to this page, we will have an item available as a nav param
  //   this.selectedItem = navParams.get('item');

  //   // Let's populate this page with some filler content for funzies
  //   this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  //   'american-football', 'boat', 'bluetooth', 'build'];

  //   this.items = [];
  //   for (let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }

  img;
  dt;
  text;
  date;
  description;
  newsArr = [];
 
  constructor(public navCtrl: NavController,  
      public navParams: NavParams,
      public NewsProvider: NewsProvider) {

        this.NewsProvider.getSports(this.newsArr).then((data: any) => {

          console.log(data);
          this.dt = data.articles;
      
          this.img = this.dt[0].urlToImage;
          this.text = this.dt[0].title;
          this.date = this.dt[0].publishedAt;
          this.description = this.dt[0].description;
          
          for (var i = 1; i < 20; i++) {
          this.newsArr.push(data.articles[i]);

            }
       });

    }
}