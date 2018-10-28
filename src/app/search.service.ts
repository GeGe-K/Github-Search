import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { environment } from '../environments/environment';
import { reject } from 'q';
import { resolve } from 'url';
// import { Repo } from '.repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  user:User;

  constructor(private http: HttpClient) {
    this.user=new User('','','',0,0,0,'','','',new Date());
  }

  getUserInfo(name) {
    interface ApiResponse {
      name:string;
      avatar_url:string;
      bio:string;
      followers:number;
      following:number;
      repos:number;
      email:string;
      html_url:string;
      repo_url:string;
      created_at:Date;

    }
    let promise = new Promise ((resolve,reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + name + environment.key).toPromise().then(response => {
        this.user.name=response.name;
        this.user.avatar_url=response.avatar_url;
        this.user.bio=response.bio;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.repos=response.repos;
        this.user.email=response.email;
        this.user.html_url=response.html_url;
        this.user.repo_url=response.repo_url;
        this.user.created_at=response.created_at;
        resolve()
      },
      error =>{
        this.user.name = "User Not Found. Try again 😊";
        reject(error);
      })
    })
    return promise
  }
  
 }
