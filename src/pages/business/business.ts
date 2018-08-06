import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  newsArr = [];
  img;
  dt;
  text;
  date;
  description;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private NewsProvider:NewsProvider ){

    this.NewsProvider.getBusiness(this.newsArr).then((data:any)=>{

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
    console.log('ionViewDidLoad BusinessPage');
  }

}
