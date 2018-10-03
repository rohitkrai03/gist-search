import { Component, OnInit, Input } from '@angular/core';
// import { reporecord } from '../get-user.service';

@Component({
  selector: 'app-show-repos',
  templateUrl: './show-repos.component.html',
  styleUrls: ['./show-repos.component.css']
})
export class ShowReposComponent implements OnInit {

  @Input() repos; // catches the object emitted by searchCompponent

  constructor() {
   // this.repos = reporecord;
  }

  /* generates an array of object properties and their values
    by fetching the object keys associated with the object and then
    fetching their value, finally storing them as key-value pair */
    genArray(obj) {
      return Object.keys(obj).map((key) => { // returns object key
         return {key: key, value: obj[key] }; } ); // returns the key value array
  }

  ngOnInit() {
  }

}
  