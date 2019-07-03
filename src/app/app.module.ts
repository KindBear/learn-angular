import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

// Services
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { ParamInterceptor } from './services/api.interceptor';
import { UserProfileComponent } from './modules/client/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { ToolbarComponent } from './modules/app-toolbar/app-toolbar.component';
import { ActivationComponent } from './modules/auth/activation/activation.component';

function init(userService: UserService, tokenService: TokenService): () => Promise<any> {
  if (tokenService.getToken()) { return () => userService.initialize(); }

  return (): Promise<any> => {
    return new Promise((res) => {
      res();
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ToolbarComponent,
    ActivationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    TokenService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [UserService, TokenService],
      useFactory: init
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
