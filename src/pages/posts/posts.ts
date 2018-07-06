import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BrowserTab } from '@ionic-native/browser-tab';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  public title:string;
  public items:any;
  public slug:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public browserTab:BrowserTab) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PostsPage');
    this.slug = this.navParams.get('title');
    this.http.get(' https://twist.moe/api/anime/'+this.slug,{
      headers:{
        'x-access-token': '1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR'
      }
    })
    .subscribe(res=>{
      console.log(res)
      this.title = res['title'];
      this.items = res['episodes'];
    })
  }
  Browser(url:string){
    browserTab.isAvailable()
    .then(isAvailable=>{
      if (isAvailable){
        browserTab.openUrl('https://twist.moe/a/'+url)
      }else{
        alert('errpr');
      }
    })
  }

}
