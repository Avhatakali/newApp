import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsReaderPage } from '../news-reader/news-reader';
import arrFind from '../../app/arrayLocate';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';


/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})

export class DisplayPage {

  u;
  sports;
  img;
  dt;
  title;
  text;
  date;
  description;
  url;
  newsArr = [];
  index;
  Arr = newsArr;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private NewsProvider:NewsProvider) {
    
      this.u = this.navParams.get('obj');
      console.log(this.u);

      this.NewsProvider.getSports(this.newsArr).then((data: any) => {

        console.log(data);
        console.log(arrFind);
        this.dt = data.articles;
    
        this.img = this.dt[this.u].urlToImage;
        this.text = this.dt[this.u].title;
        this.date = this.dt[this.u].publishedAt;
        this.description = this.dt[this.u].description;
        console.log(this.text+" "+this.img);
         });        
    }

    ionViewLoad(){
      
    }

}
