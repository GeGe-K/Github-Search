import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Search } from '../search';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newSearch = new Search ("");

  submitUser(name){
    this.search.getUserInfo(name.viewModel);
    this.search.getRepoInfo(name.viewModel);
    this.newSearch = new Search("")
  }
  constructor(private search:SearchService) { }

  ngOnInit() {
  }

}
