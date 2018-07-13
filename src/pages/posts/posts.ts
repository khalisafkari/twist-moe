import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
declare var cordova;

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
  public items:Array<object>=[];
  public slug:string;
  public kistuio:Array<Object> = [];
  public poster:Url;
  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:HttpClient
  )
  {

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
    this.Kitsu(this.slug);
  }
  Browser(url:string){
    cordova.plugins.browsertab.openUrl("https://twist.moe/a/"+url); 
  }
  Kitsu(title:string){
    this.http.get('https://kitsu.io/api/edge/anime?filter[text]='+title)
    .subscribe(res=>{
      this.kistuio = res['data'][0].attributes.synopsis;
      this.poster = res['data'][0].attributes.posterImage.original;

    })
  }

}
