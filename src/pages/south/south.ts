import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import arrFind from '../../app/arrayLocate';
import { NewsReaderPage } from '../news-reader/news-reader';
import newsArr from '../../app/newsArr';


/**
 * Generated class for the SouthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-south',
  templateUrl: 'south.html',
})
export class SouthPage {
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
     private NewsProvider:NewsProvider
  ) {

    this.NewsProvider.getMessages(this.newsArr).then((data:any)=>{

      console.log(data);
      console.log(arrFind);
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
    console.log('ionViewDidLoad SouthPage');
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
