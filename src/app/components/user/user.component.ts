import { Component } from '@angular/core';
import { USUARIO_FICTICIO } from '../../usuarios-ficticios';

const ramdomIndex = Math.floor(Math.random() * USUARIO_FICTICIO.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = USUARIO_FICTICIO[ramdomIndex];

}
