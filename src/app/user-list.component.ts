import { Component, Input } from '@angular/core';

import { User } from './user';
@Component({
  selector: 'user-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let u of users">
          {{u.name}}
        </li>
      </ul>
    </div>
  `
})
export class UserListComponent {
  @Input() users: User;
}

