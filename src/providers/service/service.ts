import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=ID&apiKey=f3ab0eb4ea8845168b905b40fcc16032';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getNews(){
    return this.httpClient.get(this.API_KEY);
  }

}



