import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  iconName = 'faCoffee';
  icon: IconDefinition = faCoffee;

  fetch() {
    import(`@fortawesome/free-solid-svg-icons/${this.iconName}.js`).then((module) => {
      this.icon = module[ this.iconName ];
    });
  }
}
