import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { SucessComponent } from './component/sucess/sucess.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {path:"",component:SignupComponent},
  {path:"verify",component:VerifyComponent},
  {path:"success",component:SucessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
