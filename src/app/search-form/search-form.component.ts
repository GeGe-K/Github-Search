import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
impo
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newSearch = new Search ('');

  submitUser(name){
    this.search.getUserInfo(name.val);
    this.search.getRepoInfo(name.val);
  }
  constructor(private search:SearchService) { }

  ngOnInit() {
  }

}
