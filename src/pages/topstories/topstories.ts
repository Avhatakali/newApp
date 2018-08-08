import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { DisplayPage } from '../display/display';
import { NewsReaderPage } from '../news-reader/news-reader';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';
import arrFind from '../../app/arrayLocate';


/**
 * Generated class for the TopstoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topstories',
  templateUrl: 'topstories.html',
})
export class TopstoriesPage {
  newsArr = [];
  img;
  dt;
  text;
  date;
  description;
  
  Arr = newsArr;
  
  category =  this.navParams.get("category");

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private NewsProvider:NewsProvider) {

    
    this.NewsProvider.getMessages(this.newsArr).then((data:any)=>{
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
    console.log('ionViewDidLoad TopstoriesPage');
    console.log(arrFind);
  }

  more(u){

    console.log(u);
      arrFind.splice(0,1,u);

      if(arrFind != null){
      this.navCtrl.push(NewsReaderPage, {obj:u});
      
       }
    }

}
