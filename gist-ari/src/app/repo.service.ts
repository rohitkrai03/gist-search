import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RepoService {

  constructor(private http: HttpClient) { }

  private rawurl = `https://api.github.com/users/`;

  public getuserrepo(username: String): Observable<any> {
    const readyurl = `${this.rawurl}${username}/repos`;
    console.log(readyurl);
    return this.http.get(readyurl);
  }
}
