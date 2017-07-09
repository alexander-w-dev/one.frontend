import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit, AfterViewInit {
  editProfileIsOpen: boolean = false;
  changePhotoIsOpen: boolean = false;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
