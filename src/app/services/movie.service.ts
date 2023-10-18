import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  API_URL: string = 'http://www.omdbapi.com/?apikey=cda5642c';

  constructor(private http: HttpClient) {}

  getMovies(searchTeam: string):Observable<any> {
    return this.http.get(this.API_URL + '&s=' + searchTeam);
  }
  getMovie(movieId: string):Observable<any> {
    return this.http.get(this.API_URL + '&i=' + movieId);
  }
}
