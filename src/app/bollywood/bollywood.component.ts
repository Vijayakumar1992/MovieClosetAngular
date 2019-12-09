import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {

  // positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  // position = new FormControl(this.positionOptions[0]);

  constructor(){
    
  }

  ngOnInit() {
  }

}
