import { Component, OnInit } from '@angular/core';
import { Hollywood } from '../hollywood.model';

@Component({
  selector: 'app-hwood-list',
  templateUrl: './hwood-list.component.html',
  styleUrls: ['./hwood-list.component.css']
})
export class HwoodListComponent implements OnInit {
  hollywoodMovies: Hollywood[];

  constructor() { }

  ngOnInit() {
  }

}
