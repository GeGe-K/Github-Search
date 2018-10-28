import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { environment } from '..environments/environment';
import { Repo } from '.repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  complete: boolean = false;
  constructor(private http: HttpClient) {}

  getUserInfo(name) {
    interface ApiData {
      name:string;
      avatar:string;
      bio:string;
      followers:number;
      following:number;
    }
  }
  

  // private username:string;
  // private clientid = 'cc22117508c88bad6c9b';
  // private clientsecret = '6e4925f8d5aa7c584bd8e57cb272a40f041a49af';
  // constructor(private _http:http) {
  //   console.log('service is ready');
  //   this.username = 'GeGe-K';
  // }
  //
  // getUserInfo(){
  //   return this._http.get('https://api.github.com/users/' + this.username + '?cliend_id=' +  this.clientid + '&client_secret=' + this.clientsecret)
  //   .map(res => res.json());
  // }
}
