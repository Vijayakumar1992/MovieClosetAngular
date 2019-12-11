import { Component, OnInit } from '@angular/core';
import { Hollywood } from '../hollywood.model';
import { HollywoodService } from '../hollywood.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hwood-list',
  templateUrl: './hwood-list.component.html',
  styleUrls: ['./hwood-list.component.css']
})
export class HwoodListComponent implements OnInit {
  hollywoodMovies: Hollywood[];
  private subscription: Subscription;

  constructor(
    private hollywoodService: HollywoodService,
    private router: Router,
    private route: ActivatedRoute) {
    this.hollywoodService.getHMovie() };



    ngOnInit() {
      this.hollywoodService.getHMovie();
      this.subscription = this.hollywoodService.hollywoodMovieChangedEvent.subscribe(
        (hollywood: Hollywood[]) => {
          this.hollywoodMovies = hollywood;
        }
      )
    }
  
    onNewDocument() {
      this.router.navigate(['new'], { relativeTo: this.route });
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
