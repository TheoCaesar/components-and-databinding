import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'node-express.js', content:'furniture store'}
  ];

  onAddServer($event: any) {
    this.serverElements.push($event)
  } 
}
