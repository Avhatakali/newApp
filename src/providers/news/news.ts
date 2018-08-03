import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getMessages(topic){
    const API:string="https://newsapi.org/v2/top-headlines?country=za&category=" + topic + "&apiKey=fc344019683c4b0cb85e1eb844491dbb";

    return new Promise ((resolve, reject) =>{
      this.http.get(API).subscribe(data =>{
        resolve(data);
      })
     });  
    }
}
