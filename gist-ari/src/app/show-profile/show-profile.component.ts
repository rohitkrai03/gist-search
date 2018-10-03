import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  profile = undefined; // to store the profile object in the observable stored in profilecontainer

  constructor(private datastore: DataStoreService) {
    this.datastore.currentprofile.subscribe(
      res => this.profile = res,
      err => {
      console.log('ERROR: no result from data store');
      console.log(err);
    },
    () => console.log('SUCCESS: profile fetched')
    );
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
