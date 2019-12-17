import { Component, OnInit } from '@angular/core';
import { Bollywood } from '../bollywood.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BollywoodService } from '../bollywood.service';


@Component({
  selector: 'app-bwood-list',
  templateUrl: './bwood-list.component.html',
  styleUrls: ['./bwood-list.component.css']
})


export class BwoodListComponent implements OnInit {
  bollywoodMovies: Bollywood[];
  private subscription: Subscription;

  constructor(
    private bollywoodService: BollywoodService,
    private router: Router,
    private route: ActivatedRoute) {
    this.bollywoodService.getBMovie() };



    ngOnInit() {
      this.bollywoodService.getBMovie();
      this.subscription = this.bollywoodService.bollywoodMovieChangedEvent.subscribe(
        (hollywood: Bollywood[]) => {
          this.bollywoodMovies = hollywood;
        }
      )
    }
  
    onNewMovies() {
      this.router.navigate(['new'], { relativeTo: this.route });
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
