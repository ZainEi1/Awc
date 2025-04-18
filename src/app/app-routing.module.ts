import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { LoginComponent } from './components/login/login.component';
import { MemberTreeComponent } from './components/member-tree/member-tree.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home',component: HomeComponent},
  { path: 'createMember',component: CreateMemberComponent},
  { path: 'login',component: LoginComponent},
  { path: 'memberTree',component: MemberTreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
