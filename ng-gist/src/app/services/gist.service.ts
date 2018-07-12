import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GistService {

  private baseApiUrl = 'http://api.github.com';

  constructor(private http: Http) { }

  public getGistsByUsername(username: string): Observable<any> {
    const gistUrl = `${this.baseApiUrl}/users/${username}/gists`;
    console.log(gistUrl);
    return this.http.get(gistUrl)
      .pipe(
        tap(gists => console.log('fetched gists')),
        catchError(this.handleError('getGistByUsername', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
