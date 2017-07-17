import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../shared/classes/user';
import { UserService } from '../../shared/services/user.service';
import { ApiService } from '../../shared/services/api.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileInfoComponent implements OnInit, AfterViewInit {
  editProfileIsOpen: boolean = false;
  changePhotoIsOpen: boolean = false;

  uploader: FileUploader;

  @Input() user: User;

  constructor(private userService: UserService, private apiService: ApiService) {
  }

  ngOnInit() {
    if (!this.user) this.userService.getUser();

    this.uploader = new FileUploader({
      url: this.apiService.apiServerUrl + 'user/upload',
      additionalParameter: {'token': this.apiService.accessToken},
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onSuccessItem = (file) => { this.userService.renewUserFromServer(); };
  }

  ngAfterViewInit(): void {
  }

  uploadAvatar(element: HTMLInputElement): void {
    this.apiService.fileLoadingFormInput('user/upload', element).then(data => {
      console.log(data);
    }).catch(console.error);

  }

}
