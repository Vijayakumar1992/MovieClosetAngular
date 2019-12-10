import { Component, OnInit } from '@angular/core';
import { Hollywood } from './hollywood.model';


@Component({
  selector: 'app-hollywood',
  templateUrl: './hollywood.component.html',
  styleUrls: ['./hollywood.component.css']
})
export class HollywoodComponent implements OnInit {

  selectedHwoodMovies: Hollywood;

  constructor() { }

  ngOnInit() {
  }

}
