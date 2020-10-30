import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
