import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-moviecloset';
  selectedFeature: string = 'hollywood';


  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
