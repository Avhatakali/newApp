import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the AfricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-africa',
  templateUrl: 'africa.html',
})
export class AfricaPage {
  newsArr = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private NewsProvider:NewsProvider) {

    this.NewsProvider.getAfrica(this.newsArr).then((data:any)=>{

      console.log(data);
     
      for(var i = 1; i < 20; i++) {
         this.newsArr.push(data.articles[i]);
          }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfricaPage');
  }

}
