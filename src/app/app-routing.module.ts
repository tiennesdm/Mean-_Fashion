import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {MenComponent} from './trend/men/men.component';
import { WomenComponent } from './trend/women/women.component';
import {CreateComponent} from './admin/create/create.component';
import {ListComponent} from './admin/list/list.component';
import {AuthGuardGuard} from './auth/auth-guard.guard';
const routes: Routes = [
  { path: '', component: MenComponent },
  { path: 'login', component: LoginComponent  },
  {path: 'women' , component: WomenComponent},
  {path: 'create', component: CreateComponent, canActivate: [AuthGuardGuard]},
  {path: 'list', component: ListComponent , canActivate: [AuthGuardGuard]},
  { path: 'edit/:postId', component: CreateComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
