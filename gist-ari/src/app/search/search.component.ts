import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter();

  onSearch(text) {
    console.clear();
    this.search.emit(text);
    this.router.navigate(['profile']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
