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


  // sortAndSend() {
  //   this.hollywoodMovies.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));    
  //   this.hollywoodMovieChangedEvent.next(this.hollywoodMovies.slice());
  // }

getHMovies() {
  this.http.get<{ message: string, hollywoodMovies: Hollywood[] }>('http://localhost:3000/hollywoods')
    .subscribe(
      (hollywoods) => {
        this.hollywoodMovies = hollywoods.hollywoodMovies;
        // console.log(this.hollywoodMovies.toString());
        // this.sortAndSend();
      },
      (error: any) => {
        console.log(error);
      }
    );
}

getHMovie(id: string): Hollywood {
  for (const hollywoods of this.hollywoodMovies) {
    if (hollywoods.id === id) {
      return hollywoods;
    }
  }
  return null;
}

deleteHMovie(hollywood: Hollywood) {
  if (!hollywood) {
    return;
  }
  const pos = this.hollywoodMovies.findIndex(d => d.id === hollywood.id);

  if (pos < 0) {
    return;
  }  

  this.http.delete('http://localhost:3000/hollywoods/' + hollywood.id)
    .subscribe(
      (response: Response) => {
        this.hollywoodMovies.splice(pos, 1);
        // this.sortAndSend();
      }
    );
}

  addHMovies(hollywood: Hollywood) {
    if (!hollywood) {
      return;
    }

    //make sure id of the new hollywood is empty
    hollywood.id = '';

    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    const strHollywood = JSON.stringify(hollywood);


    //add to database
    this.http.post<{ message: string, hollywood: Hollywood }>('http://localhost:3000/hollywoods', strHollywood, { headers: headers })
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
    newHMovie._id = originalHMovie._id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put('http://localhost:3000/hollywoods/' + originalHMovie.id, newHMovie, { headers: headers })
      .subscribe(
        (response: Hollywood) => {
          this.hollywoodMovies[pos] = newHMovie;
        }),
      (error: any) => {
        console.log(error);
      };
  }
}
