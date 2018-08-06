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

  getMessages(headlines){
    const API:string="https://newsapi.org/v2/top-headlines?country=za&category="+headlines+"&apiKey=fc344019683c4b0cb85e1eb844491dbb";

    return new Promise ((resolve, reject) =>{
      this.http.get(API).subscribe(data =>{
        resolve(data);
      })
     });  
    }

    getSA(SA){
      const API:string="https://newsapi.org/v2/top-headlines?country=za&category="+SA+"&apiKey=9c0b4903a7e943b78660761f837c2213";

      return new Promise ((resolve, reject) =>{
       this.http.get(API).subscribe(data =>{
         resolve(data);
       })
      });  
   }  

   getAfrica(africa){
    const API:string="https://newsapi.org/v2/top-headlines?country=&category=africa"+africa+"&apiKey=9c0b4903a7e943b78660761f837c2213";

    return new Promise ((resolve, reject) =>{
     this.http.get(API).subscribe(data =>{
       resolve(data);
     })
    });  
 }  

    getSports(sports){
       const API:string="https://newsapi.org/v2/top-headlines?country=za&category=sports"+sports+"&apiKey=9c0b4903a7e943b78660761f837c2213";

       return new Promise ((resolve, reject) =>{
        this.http.get(API).subscribe(data =>{
          resolve(data);
        })
       });  
    }

    getPolitics(politics){
      const API:string="https://newsapi.org/v2/top-headlines?country=za&q=politics"+politics+"&apiKey=fc344019683c4b0cb85e1eb844491dbb";

      return new Promise ((resolve, reject) =>{
       this.http.get(API).subscribe(data =>{
         resolve(data);
       })
      });  
   }

   getVidz(stories){
    const API:string="https://newsapi.org/v2/everything?counrty=za&sortBy=publishedAt"+stories+"&apiKey=9c0b4903a7e943b78660761f837c2213";

    return new Promise ((resolve, reject) =>{
     this.http.get(API).subscribe(data =>{
       resolve(data);
     })
    });  
 }

 getWorldNews(world){
  const API:string="https://newsapi.org/v2/top-headlines?country=za&category="+world+"&apiKey=9c0b4903a7e943b78660761f837c2213";

  return new Promise ((resolve, reject) =>{
   this.http.get(API).subscribe(data =>{
     resolve(data);
   })
  });  
}

getBusiness(business){

  const API:string="https://newsapi.org/v2/top-headlines?country=za&category=business"+business+"&apiKey=9c0b4903a7e943b78660761f837c2213";
  
  return new Promise ((resolve, reject) =>{
    this.http.get(API).subscribe(data =>{
      resolve(data);
    })
   });    
}



}
