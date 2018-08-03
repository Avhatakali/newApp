import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { DisplayPage } from '../display/display';
import { NewsReaderPage } from '../news-reader/news-reader';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  img;
  dt;
  text;
  date;
  description;

  newsArr = [];
 

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
          
          for (var i = 1; i < 20; i++) {
          this.newsArr.push(data.articles[i]);

    }
});
  
  }

  ionViewDidLoad() {
    console.log();
  }

  btn(cat){
    this.navCtrl.setRoot(DisplayPage, {category:cat})
  }

stories(){
  this.navCtrl.push(NewsReaderPage);
}


// show(i){
//   this.navCtrl.push(HomePage, {obj:i});
// }

// toTop(){
//   this.navCtrl.push(HomePage);
 
// }
}
