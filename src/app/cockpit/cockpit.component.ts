import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('addtoServer') serverElement = new EventEmitter();
  newServerName = '';
  newServerContent = '';
  @ViewChild('nameField') namefield;

  onAddServer(tempvar?:'') {
    console.log('nameField type => ', this.namefield)
    console.log('nameField => ', this.namefield.nativeElement.value)
      this.serverElement.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
      this.serverElement.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  doSomething(){
    console.log('hello from cockpit...');
  }
}
