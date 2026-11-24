import { Component } from '@angular/core';
import { NoahNavbarComponent } from '@dandy1103/ui';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NoahNavbarComponent],
  template: `<noah-navbar repo="noah-calendar" fallbackLabel="行事曆" />`,
})
export class NavbarComponent {}
