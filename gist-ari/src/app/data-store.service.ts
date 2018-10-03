import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DataStoreService {

  private source = new BehaviorSubject(undefined);
  currentprofile = this.source.asObservable(); // to store the profile returned by the API and serve the same on service calls

  public store_user(profile) {
    this.source.next(profile);
    console.log('(in data-store) profile saved');
  }
}
