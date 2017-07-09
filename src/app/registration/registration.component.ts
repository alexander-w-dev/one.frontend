import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { ISelectInputOption } from '../shared/components/form/select-input/select-input.component';
import { User, UserRegister } from '../shared/classes/user';
import { IUser } from '../../interfaces';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnChanges {

  roleType: string = 'patient';
  roleTypes: ISelectInputOption[];

  birthDays: ISelectInputOption[];
  birthMonths: ISelectInputOption[];
  birthYears: ISelectInputOption[];
  districtNames: ISelectInputOption[];

  firstFormChecked: boolean = false;

  patient: IUser = new UserRegister({
    username: '',
    email: '',
    type: 'patient',
  } as IUser);

  doctor: IUser = new UserRegister({
    username: '',
    email: '',
    type: 'doctor',
  } as IUser);

  submitted = false;

  active = true;

  /* example : {username: 'Fio is required'} */
  formErrors = {} as any;

  registrationForm: NgForm;
  @ViewChild('registrationForm') currentForm: NgForm;

  constructor(private userService: UserService) {
    this.roleTypes = [];
    this.roleTypes.push({
      value: 'patient',
      text: 'Пациент',
    });
    this.roleTypes.push({
      value: 'doctor',
      text: 'Доктор',
    });
    this.birthDays = [];
    this.birthDays.push({
      value: '0',
      text: 'День',
    });
    for (let i = 1; i <= 31; i++) {
      this.birthDays.push({
        value: i.toString(),
        text: i.toString(),
      });
    }
    this.birthYears = [];
    this.birthDays.push({
      value: '0',
      text: 'Год',
    });
    for (let i = 1910; i <= 2017; i++) {
      this.birthYears.push({
        value: i.toString(),
        text: i.toString(),
      });
    }
    this.birthMonths = [
      {value: 'Январь', text: 'Январь'},
      {value: 'Февраль', text: 'Февраль'},
      {value: 'Март', text: 'Март'},
      {value: 'Апрель', text: 'Апрель'},
      {value: 'Май', text: 'Май'},
      {value: 'Июнь', text: 'Июнь'},
      {value: 'Июль', text: 'Июль'},
      {value: 'Август', text: 'Август'},
      {value: 'Сентябрь', text: 'Сентябрь'},
      {value: 'Октябрь', text: 'Октябрь'},
      {value: 'Ноябрь', text: 'Ноябрь'},
      {value: 'Декабрь', text: 'Декабрь'},
    ];
    this.districtNames = [
      {value: '0', text: 'Регоин проживания'},
      {value: 'Российская Федерация', text: 'Российская Федерация'},
      {value: 'Алтайский край', text: 'Алтайский край'},
      {value: 'Алейский район', text: 'Алейский район'},
    ];
  }


  onSubmit() {
    this.userService.register(Object.assign({ type: this.roleType.replace('patient', 'pacient') }, this.registrationForm.value))
      .then((data: any) => {
        this.userService.afterGetUserFromServer(data.user);
      })
      .catch((data) => {
        this.formErrors = data.errors;
      });
    this.submitted = true;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.firstFormChecked = true;

    if (this.currentForm === this.registrationForm) {
      return;
    }
    this.registrationForm = this.currentForm;
    this.registrationForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {

  }

}
