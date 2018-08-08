import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';
import arrSports from '../../app/arrSports';


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
  arr = arrSports;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private NewsProvider:NewsProvider) { 
      this.u = this.navParams.get('obj');
      this.sports = this.navParams.get('obj');
      console.log(this.u);
      console.log(this.sports);
      
if(this.u != null){

      this.NewsProvider.getMessages(this.newsArr).then((data: any) => {

        console.log(data);
        this.dt = data.articles;
    
        this.img = this.dt[this.u].urlToImage;
        this.text = this.dt[this.u].title;
        this.date = this.dt[this.u].publishedAt;
        this.description = this.dt[this.u].description;
        console.log(this.text+" "+this.img);
         });
        } else{
         this.NewsProvider.getSports(this.newsArr).then((data: any) => {

          console.log(data);
          this.dt = data.articles;
      
          this.img = this.dt[this.sports].urlToImage;
          this.text = this.dt[this.sports].title;
          this.date = this.dt[this.sports].publishedAt;
          this.description = this.dt[this.sports].description;
          console.log(this.text+" "+this.img);
           });         
        }
     }

     
    ionViewLoad(){
      
        }
    }

