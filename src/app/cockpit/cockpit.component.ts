import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('addtoServer') serverElement = new EventEmitter();
  newServerName = '';
  newServerContent = '';

  onAddServer(tempvar?:'') {
    console.log('nameField => ', tempvar)
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
}
