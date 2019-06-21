import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../../components/account/sign-up/sign-up.component';
import { SignInComponent } from '../../components/account/sign-in/sign-in.component';
import { HomeComponent } from '../../components/home/home.component';
import { AuthGuard } from '../../guards/auth-guard';

const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // redirect to root
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
