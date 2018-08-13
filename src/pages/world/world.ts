import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsReaderPage } from '../news-reader/news-reader';
import arrFind from '../../app/arrayLocate';

/**
 * Generated class for the WorldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-world',
  templateUrl: 'world.html',
})
export class WorldPage {
  obj = this.navParams.get('obj')
newsArr = [];  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
  private NewsProvider:NewsProvider) {

    this.NewsProvider.getMessages(this.newsArr).then((data:any)=>{

      console.log(data);

      for(let index = 0; index < 10; index++) {
       
        this.newsArr.push(data.articles[index]);  
       }
    })    
  }

  more(u){

    console.log(u);
      arrFind.splice(0,1,u);

      if(arrFind != null){
      this.navCtrl.push(NewsReaderPage, {obj:u});
       }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }

}
