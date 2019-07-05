import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { UserProfileComponent } from './modules/client/user-profile/user-profile.component';
import { ActivationComponent } from './modules/auth/activation/activation.component';
import { AuthGuard } from './services/auth.guard';
import { UserResolverService } from './services/user-resolver.service';
import { UserType } from './models/user-type';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'activation/:token', component: ActivationComponent },
  { path: '', component: UserProfileComponent, canActivate: [AuthGuard], resolve: { user: UserResolverService } },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule),
    canLoad: [AuthGuard],
    data: { userType: UserType.ADMIN }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UserResolverService
  ]
})
export class AppRoutingModule { }
