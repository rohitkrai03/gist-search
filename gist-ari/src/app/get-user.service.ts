import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  private rawurl = `https://api.github.com/users/`;
  private profile;

  constructor(
    private http: HttpClient,
    private datastore: DataStoreService
    ) { }

  public getuser(user: string = null) {
    if (user != null) {
      console.log('SUCCESS: received user ' + user + ' from app Component');
      this.getData(user);
    } else {
      console.log('ERROR: could not receive user from app Component');
    }
  }

private getData(user: string = null) {
  if (user !== '') {
    this.getuserprofile(user);
  } else {
    console.log('ERROR: invalid username ' + user);
  }
}

private getuserprofile(username) {

  const readyurl = `${this.rawurl}${username}?7c93f5f9bb1b5fdd881ebae3fbfd1b2a8b7f676f`;
  console.log('Calling API for profile with URL:' + readyurl);
  this.http.get(readyurl).subscribe(
    res => this.profile = res,
    err => {
      console.log('ERROR: no result from api call');
      console.log(err);
    },
    () => {
      console.log('SUCCESS: profile fetched');
      this.datastore.store_user(this.profile);
    }
    );
  }


}
