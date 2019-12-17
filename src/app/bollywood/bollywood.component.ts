import { Component, OnInit } from '@angular/core';
import { Bollywood } from './bollywood.model';


@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {

  selectedBwoodMovies: Bollywood;

  constructor(){
    
  }

  ngOnInit() {
  }

}
