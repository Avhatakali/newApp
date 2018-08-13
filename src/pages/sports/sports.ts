import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import arrFind from '../../app/arrayLocate';
import { NewsReaderPage } from '../news-reader/news-reader';
import newsArr from '../../app/newsArr';
import arrSports from '../../app/arrSports';
import { DisplayPage } from '../display/display';


/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {
  obj = this.navParams.get('obj')
  newsArr = [];
  img;
  dt;
  text;
  date;
  description;
  
  Arr = newsArr;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  private NewsProvider:NewsProvider) {

    this.NewsProvider.getSports(this.newsArr).then((data:any)=>{

      console.log(arrFind);
      console.log(data);
      this.dt = data.articles;
    
      this.img = this.dt[0].urlToImage;
      this.text = this.dt[0].title;
      this.date = this.dt[0].publishedAt;
      this.description = this.dt[0].description;

      for (let index = 0; index < 10; index++) {
       
        this.newsArr.push(data.articles[index]);     
        }
    })    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

  more(u){

    console.log(u);
      arrSports.splice(0,1,u);

      if(arrFind != null){
      this.navCtrl.push(DisplayPage, {obj:u});
      
       }
    }  

}
