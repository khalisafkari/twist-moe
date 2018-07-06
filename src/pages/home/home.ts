import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PostsPage } from '../posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public items:any;
 public logo:string;
  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.getItem();
    this.http.get('https://twist.moe/feed/anime?format=json')
    .subscribe(logo=>{
      this.logo = logo['image'].url;
    })
  }
  getItem(){
    this.http.get(' https://twist.moe/api/anime',{
      headers:{
        'x-access-token': '1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR'
      }
    })
    .subscribe((res)=>{
      this.items = res;
    })
  }
  PostsId(title:string){
    this.navCtrl.push(PostsPage,{title:title});
  }
}
