import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userLoaded.forEach(user => {
      this.user = user;
    });
  }

  isPatient() {
    return this.user && this.user.isPatient();
  }

  isDoctor() {
    return this.user && this.user.isDoctor();
  }

}
