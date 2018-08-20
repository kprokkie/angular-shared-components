import { Component } from '@angular/core';

@Component({
  selector: 'shared-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Reusable Components';
  isToggle: boolean = false;

  toggleCanvas(): void {
    this.isToggle = !this.isToggle;
  }

  toggleListener(bool): void {
    this.isToggle = bool;
  }

}
