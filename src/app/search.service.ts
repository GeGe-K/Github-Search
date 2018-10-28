import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private username:string;
  private clientid = 'cc22117508c88bad6c9b';
  private clientsecret = '6e4925f8d5aa7c584bd8e57cb272a40f041a49af';
  constructor(private http:http) {
    console.log('service is ready');
    this.username = 'GeGe-K';
  }

  getUserInfo(){
    return this.http.get('https://api.github.com/users/GeGe-K' + this.username + '?cliend_id=' +  this.clientid + '&client_secret=' + this.clientsecret)
    .map(res => res.json());
  }
}
