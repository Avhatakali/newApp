import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { DisplayPage } from '../display/display';
import { NewsReaderPage } from '../news-reader/news-reader';
import arrFind from '../../app/arrayLocate';
import newsArr from '../../app/newsArr';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  obj = this.navParams.get('obj')
  newsArr = [];
  img;
  dt;
  title;
  text;
  date;
  description;
  url;
  Arr = newsArr  ;

  constructor(public navCtrl: NavController,  
      public navParams: NavParams,
      public NewsProvider: NewsProvider) {

        this.NewsProvider.getMessages(this.newsArr).then((data: any) => {

          console.log(data);
          this.dt = data.articles;
      
          this.img = this.dt[0].urlToImage;
          this.text = this.dt[0].title;
          this.date = this.dt[0].publishedAt;
          this.description = this.dt[0].description;
          
          for (var i = 0; i < 15; i++) {
              this.newsArr.push(data.articles[i]);
              }
       });
  
  }

  ionViewDidLoad(){
    console.log();

  }

  more(u){

    console.log(u);
      arrFind.splice(0,1,u);

      if(arrFind != null){
      this.navCtrl.push(NewsReaderPage, {obj:u});
      
       }
    }
}
