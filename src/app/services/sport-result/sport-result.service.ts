import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, catchError, map, of, debounce } from 'rxjs';
import { SportResultKey } from 'src/app/constants/constants';
import { SportType } from 'src/app/constants/sport-type';
import { SportResult } from 'src/app/model/sport-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SportResultService {
  constructor(private http: HttpClient) {}

  public getSportResults(type: SportType, searchText?: string) {
    const url = this.getEndpoint('/results');
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(url, {}, { headers }).pipe(
      debounce(() => interval(1000)),
      map(resData => {
        const result = (resData as Record<string, SportResult[]>)[SportResultKey[type]] || [];

        if (!searchText) {
          return result;
        }

        return result.filter(item =>
          Object.values(item).some(value => String(value).toLowerCase().includes(searchText.toLowerCase()))
        );
      }),
      catchError(error => {
        this.handleError(error, { url });
        return of(undefined);
      })
    );
  }

  /**
   * Getting api full API endpoint from the path
   * @param  {String} path
   * @return {String}
   */
  public getEndpoint(path: string) {
    return `${environment.api.baseUrl}${path}`;
  }

  /**
   * Handle error inside this
   * @param {HttpErrorResponse} error
   */
  private handleError(error: HttpErrorResponse, req: Record<string, unknown>) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.warn(errorMessage, req);
    console.error(error);
  }
}
