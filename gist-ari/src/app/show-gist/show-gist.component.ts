import { Component, OnInit, Input } from '@angular/core';
// import { gistrecord } from '../get-user.service';

@Component({
  selector: 'app-show-gist',
  templateUrl: './show-gist.component.html',
  styleUrls: ['./show-gist.component.css']
})
export class ShowGistComponent implements OnInit {

  @Input() gists; // catches the object emitted by searchCompponent

  constructor() {
   // this.gists = gistrecord;
   }

  /* generates an array of object properties and their values
    by fetching the object keys associated with the object and then
    fetching their value, finally storing them as key-value pair */
  genArray(obj) {
    return Object.keys(obj).map((key) => {
       return {key: key, value: obj[key] }; } );
}

  ngOnInit() {
  }
}
