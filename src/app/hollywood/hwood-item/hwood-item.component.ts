import { Component, OnInit, Input } from '@angular/core';
import { Hollywood } from '../hollywood.model';

@Component({
  selector: 'app-hwood-item',
  templateUrl: './hwood-item.component.html',
  styleUrls: ['./hwood-item.component.css']
})
export class HwoodItemComponent implements OnInit {
  @Input() hollywood : Hollywood;

  constructor() { }

  ngOnInit() {
  }

}
