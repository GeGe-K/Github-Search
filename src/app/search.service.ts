import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { environment } from '../environments/environment';
import { reject } from 'q';
import { resolve } from 'url';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  
  user:User;
  repos = [];


  constructor(private http: HttpClient) {
    this.user=new User('','','','',0,0,0,'','','',new Date());
    // this.repo=new Repo('','',new Date(),new Date(),'','', '');
  }

  getUserInfo(name) {
    interface ApiResponse {
      login:string
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
      this.http.get<ApiResponse>(`https://api.github.com/users/${name}?client_id=${environment.Client_ID}&client_secret=${environment.Client_Secret}`).toPromise().then(response => {
        this.user.login=response.login;
        this.user.name=response.name;
        this.user.avatar_url=response["avatar_url"];
        this.user.bio=response["bio"];
        this.user.followers=response["followers"];
        this.user.following=response["following"];
        this.user.repos=response["public_repos"];
        this.user.email=response["email"];
        this.user.html_url=response["html_url"];
        this.user.svn_url=response["repo_url"];
        this.user.created_on=response["created_at"];
        resolve()
      },
      error =>{
        this.user.name = "Not Found. Try again 😊";
        reject(error);
      })
    })
    return promise
  }

  getRepoInfo(username){
    interface ApiResponse{
      name:string;
      description:string;
      html_url:string;
      svn_url:string;
      created_at:Date;
      updated_at:Date;
      homepage:string;
    }
    let promise = new Promise ((resolve,reject) => {
      this.http.get<ApiResponse[]>(`https://api.github.com/users/${username}/repos?client_id=${environment.Client_ID}&client_secret=${environment.Client_Secret}`).toPromise().then(response => {
        for(let i of response) {
          let repo=new Repo('','',new Date(),new Date(),'','', '');
          repo.name=i.name;
          repo.description=i.description;
          repo.html_url=i.html_url;
          repo.svn_url=i.svn_url;
          repo.created_on=i.created_at;
          repo.updated_on=i.updated_at;
          repo.homepage=i.homepage;          
          this.repos.push(repo);
          resolve();
        }
      }).catch(err => reject(err));
     });
     console.log(this.repos);
     return promise;    
  }
}
