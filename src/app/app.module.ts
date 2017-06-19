import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as intrfaces from '../interfaces';

import { AppComponent } from './app.component';
import { MemberAreaModule } from './member-area/member-area.module';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { PageInDevComponent } from './page-in-dev/page-in-dev.component';
import { DropDownButtonDirective } from './shared/directives/dropdown-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PageNotFoundComponent,
    PageInDevComponent,
    LoginComponent,
    DropDownButtonDirective,
  ],
  imports: [
    BrowserModule,
    MemberAreaModule,
    RouterModule
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
