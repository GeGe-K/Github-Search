import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo'
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers:[ SearchService]
})
export class RepoComponent implements OnInit {
  repo: Repo;
  constructor(private search:SearchService) { }

  ngOnInit() {
  }

}
