import { Component } from '@angular/core';

@Component({
  selector: 'app-foot-bar',
  template: `
  <mat-toolbar class="footer">
    <span>©TodoList - {{ today | date: 'YYYY'}}</span>
  </mat-toolbar>`,
  styles: [`
    .footer {
      position: absolute;
      bottom: 0;
    }
    span {
      width: 100%;
      text-align: center;
      font-size: 0.8em;
    }
  `]
})
export class FootBarComponent {
  today: Date = new Date();
}
