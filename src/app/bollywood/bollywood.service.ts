import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bollywood } from './bollywood.model';

@Injectable({
  providedIn: 'root'
})
export class BollywoodService {
  bollywoodMovieChangedEvent = new Subject<Bollywood[]>();

  private bollywoodMovies: Bollywood[] = [];

  constructor(private http: HttpClient) { }



  getBMovie() {
    this.http.get<{ message: string, bollywood: Bollywood[] }>('http://localhost:3000/hollywood')
      .subscribe(
        (boolywoodData) => {
          this.bollywoodMovies = boolywoodData.bollywood;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }


  deleteHMovie(bollywood: Bollywood) {
    if (!bollywood) {
      return;
    }
    const pos = this.bollywoodMovies.findIndex(d => d.id === bollywood.id);

    if (pos < 0) {
      return;
    }

    this.http.delete('http://localhost:3000/hollywood/' + bollywood.id)
      .subscribe(
        (response: Response) => {
          this.bollywoodMovies.splice(pos, 1);
        }
      );
  }
}



