import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApisProvider {

  constructor(public http: HttpClient) {
  }
  ListAnime(){
    return this.http.get('https://secret-springs-76059.herokuapp.com/twist/index.php');
  }

}
