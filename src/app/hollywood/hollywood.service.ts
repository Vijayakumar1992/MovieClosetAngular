import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hollywood } from './hollywood.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HollywoodService {
  hollywoodMovieChangedEvent = new Subject<Hollywood[]>();

  private hollywoodMovies: Hollywood[] = [];

  constructor(private http: HttpClient) { }



   //getting the list of Movies and a single movie respectively.
getHMovie(id: string): Document {
  for (const hollywoodMovies of this.hollywoodMovies) {
    if (hollywoodMovies.id === id) {
      return document;
    }
  }
  return null;
}







  addHMovies(hollywood: Hollywood) {

    if (!hollywood) {
      return;
    }

    //make sure id of the new document is empty
    hollywood.id = '';

    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    const strHollywood = JSON.stringify(hollywood);


    //add to database
    this.http.post<{ message: string, hollywood: Hollywood }>('http://localhost:3000/hollywood', strHollywood, { headers: headers })
      .subscribe(
        (responseData) => {
          this.hollywoodMovies.push(responseData.hollywood);
        }),
      (error: any) => {
        console.log(error);
      };

  }








  updateHollywoodMovie(originalHMovie: Hollywood, newHMovie: Hollywood) {
    if (!originalHMovie || !newHMovie) {
      return;
    }

    const pos = this.hollywoodMovies.indexOf(originalHMovie);
    if (pos < 0) {
      return;
    }

    newHMovie.id = originalHMovie.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put('http://localhost:3000/documents/' + originalHMovie.id, newHMovie, { headers: headers })
      .subscribe(
        (response: Hollywood) => {
          this.hollywoodMovies[pos] = newHMovie;
        }),
      (error: any) => {
        console.log(error);
      };

  }


}
