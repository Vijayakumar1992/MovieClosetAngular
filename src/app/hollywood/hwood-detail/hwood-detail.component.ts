import { Component, OnInit } from '@angular/core';
import { Hollywood } from '../hollywood.model';
import { HollywoodService } from '../hollywood.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'app-hwood-detail',
  templateUrl: './hwood-detail.component.html',
  styleUrls: ['./hwood-detail.component.css']
})
export class HwoodDetailComponent implements OnInit {
  hollywood: Hollywood;
  id: string;
  nativeWindow: any;

  constructor(
    private hollywoodService: HollywoodService,
    private windRefService: WindRefService,
    private router: Router,
    private route: ActivatedRoute) {
    this.nativeWindow = windRefService.getNativeWindow() 
    };

    ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = params['id'];    
          this.hollywood = this.hollywoodService.getHMovie(this.id);
        }
      );
    }
  
    onView() {
      if (this.hollywood.name) {
        this.nativeWindow.open(this.hollywood.name);
      }
    }
  
    onDelete() {
      this.hollywoodService.deleteHMovie(this.hollywood);
      this.router.navigate(['/hollywoods'], { relativeTo: this.route });
    }

}
