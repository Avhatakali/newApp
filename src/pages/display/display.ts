import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsReaderPage } from '../news-reader/news-reader';
import arrFind from '../../app/arrayLocate';
import newsArr from '../../app/newsArr';
import { news } from '../../app/news';


/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})

export class DisplayPage {


  


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private NewsProvider:NewsProvider) {
  
    }

    ionViewLoad(){
      
    }

}
