import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const LOGIN_ROUTES = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'user',
    component: UserComponent
  }

]


@NgModule({
  declarations: [
    LoginPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ]
})
export class LoginModule { }
