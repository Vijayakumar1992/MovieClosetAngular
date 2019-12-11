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
// getHMovie(id: string): Hollywood {
//   for (const hollywoodMovies of this.hollywoodMovies) {
//     if (hollywoodMovies.id === id) {
//       return hollywoodMovies;
//     }
//   }
//   return null;
// }


getHMovie() {
  this.http.get<{ message: string, hollywood: Hollywood[] }>('http://localhost:3000/hollywood')
    .subscribe(
      (documentData) => {
        this.hollywoodMovies = documentData.hollywood;
      },
      (error: any) => {
        console.log(error);
      }
    );
}


deleteHMovie(hollywood: Hollywood) {
  if (!hollywood) {
    return;
  }
  const pos = this.hollywoodMovies.findIndex(d => d.id === hollywood.id);

  if (pos < 0) {
    return;
  }  

  this.http.delete('http://localhost:3000/hollywood/' + hollywood.id)
    .subscribe(
      (response: Response) => {
        this.hollywoodMovies.splice(pos, 1);
      }
    );
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
