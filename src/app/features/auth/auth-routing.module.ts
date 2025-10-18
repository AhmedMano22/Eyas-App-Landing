import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

const routes: Routes = [{ path: '', component: AuthComponent,
children:[
    {path:'login', component:LoginComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: 'unauthorized', component: NotAuthorizedComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
