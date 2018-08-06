import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';

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

  

  Arr = newsArr;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private NewsProvider:NewsProvider) {

   }

}
