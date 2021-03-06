import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as intrfaces from '../interfaces';

import { AppComponent } from './app.component';
import { MemberAreaModule } from './member-area/member-area.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { PageInDevComponent } from './page-in-dev/page-in-dev.component';
import { DropDownButtonDirective } from './shared/directives/dropdown-button.directive';
import { AccountModule } from './account/account.module';
import { ModalWindowModule } from './shared/components/modal/modal.module';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { PageInDev2Component } from './page-in-dev2/page-in-dev2.component';
import { PageInDev2Module } from './page-in-dev2/page-in-dev2.module';

@NgModule({
  imports: [
    BrowserModule,
    MemberAreaModule,
    RouterModule.forRoot([
      {
        path: 'questionnaire/:id_measure',
        component: QuestionnaireComponent
      }
    ]),
    AccountModule,
    ModalWindowModule,
    PageInDev2Module,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageInDevComponent,
    DropDownButtonDirective,
  ],
  exports: [
    BrowserModule,
    MemberAreaModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}


