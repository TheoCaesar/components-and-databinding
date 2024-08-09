import { Component, ViewEncapsulation, ViewChild, AfterViewChecked } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {
  @ViewChild(CockpitComponent) cockpitComponent: CockpitComponent
  serverElements = [
    {type: 'server', name: 'node-express.js', content:'furniture store'}
  ];

  ngAfterViewChecked(): void {
    console.log(this.cockpitComponent.doSomething());    
  }

  onAddServer($event: any) {
    this.serverElements.push($event)
  } 
}

