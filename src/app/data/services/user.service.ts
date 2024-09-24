import {Injectable} from '@angular/core';
import {User} from "../../domain/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();

  constructor() {
  }
}
