import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { GistService } from './services/gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gists: Observable<any>;
  private searchTerms = new Subject<string>();

  constructor (private gistService: GistService) {}

  handleSearch(searchTerm: string) {
    this.searchTerms.next(searchTerm);
  }

  ngOnInit(): void {
    this.gists = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      tap(term => console.log(term)),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gistService.getGistsByUsername(term)),
    );
    this.gists.subscribe(gists => console.log(gists));
}
}
