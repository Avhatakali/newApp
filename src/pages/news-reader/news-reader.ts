import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the NewsReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-reader',
  templateUrl: 'news-reader.html',
})
export class NewsReaderPage {

  newsarr = [];
  headline;
  news = [];
  category =  this.navParams.get("category");

  constructor(public navCtrl: NavController, public navParams: NavParams, private NewsProvider:NewsProvider) {
  
  this.NewsProvider.getMessages(this.category).then((data:any)=>{

    console.log(data);

    for (let index = 0; index < 10; index++) {
     
      this.newsarr.push(data.articles[index]);
      
        }
    })
  }

}
