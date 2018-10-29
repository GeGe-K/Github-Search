import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userName = '';
  repo:Repo;
  user:User;

  constructor(private search:SearchService) { }

  ngOnInit() {
    this.search.getUserInfo(this.userName);
    this.user = this.search.user;

    this.search.getRepoInfo(this.userName);
    this.repo = this.search.repo;
  }

}
