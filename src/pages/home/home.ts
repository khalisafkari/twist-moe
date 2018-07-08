import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PostsPage } from '../posts/posts';
import { ApisProvider } from '../../providers/apis/apis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public items:any;
 public logo:string;
  constructor(public navCtrl: NavController,public http:HttpClient, public apis:ApisProvider) {
    this.getItem();
    this.http.get('https://twist.moe/feed/anime?format=json')
    .subscribe(logo=>{
      this.logo = logo['image'].url;
    })
  }
  getItem(){
    this.apis.ListAnime().subscribe((res)=>{
      this.items = res;
    })
  }
  PostsId(title:string){
    this.navCtrl.push(PostsPage,{title:title});
  }
}
