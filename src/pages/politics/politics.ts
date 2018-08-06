import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';


/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {
  newsArr = [];
  headline;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private NewsProvider:NewsProvider) {
      this.NewsProvider.getMessages(this.newsArr).then((data:any)=>{

        console.log(data);
  
        for (let index = 0; index < 10; index++) {
         
          this.newsArr.push(data.articles[index]);
          
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticsPage');
  }

}
