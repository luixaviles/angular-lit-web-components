import { Component } from '@angular/core';
import { User } from 'src/web-components/card-user/user';

import '../web-components/card-user/card-user';

@Component({
  selector: 'corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // user: User = {
  //   id: 2,
  //   fullName: 'Luis',
  //   role: 'Software Engineer',
  //   avatar: 'https://luixaviles.com/images/avatar@2x.png',
  // };

  users: User[] = [
    {
      id: 0,
      fullName: 'Luis Aviles',
      role: 'Software Engineer',
      avatar: 'https://luixaviles.com/images/avatar@2x.png',
    },
    {
      id: 1,
      fullName: 'Roperto Perez',
      role: 'UX Designer',
    },
    { id: 2, fullName: 'Maria Gomez', role: 'Data Scientist' },
  ];

  edit(event: Event) {
    const user = (event as CustomEvent<User>).detail;
    console.log('Edit user', user);
  }
}
