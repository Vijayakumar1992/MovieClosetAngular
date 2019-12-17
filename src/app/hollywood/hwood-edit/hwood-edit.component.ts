import { Component, OnInit } from '@angular/core';
import { Hollywood } from '../hollywood.model';
import { NgForm } from '@angular/forms';
import { HollywoodService } from '../hollywood.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hwood-edit',
  templateUrl: './hwood-edit.component.html',
  styleUrls: ['./hwood-edit.component.css']
})
export class HwoodEditComponent implements OnInit {
  originalHollywood: Hollywood;
  hollywood: Hollywood;
  editMode: boolean = false;
  id: string;

  constructor(
    private hollywoodService: HollywoodService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id === undefined || this.id === null) {
          this.editMode = false
          return;
        }

        this.originalHollywood = this.hollywoodService.getHMovie(this.id);
        if (this.originalHollywood === undefined || this.originalHollywood === null) {
          this.editMode = false;
          return;
        }
        this.editMode = true;
        this.hollywood = JSON.parse(JSON.stringify(this.originalHollywood));
      })
  }



  onSubmit(form: NgForm) {
    const value = form.value;
    const newHMovie = new Hollywood('','', value.name, value.type, value.genre, null)

    if (this.editMode === true) {
      this.hollywoodService.updateHollywoodMovie(this.originalHollywood, newHMovie);
    } else {
      this.hollywoodService.addHMovies(newHMovie);
    }
    this.router.navigate(['/hollywoods']);
  }


  onCancel(){
    this.router.navigate(['/hollywoods']);
  }



}
