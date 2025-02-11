// inbuilt components
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

// user made components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuardService } from './services/auth-guard.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppRouting } from './modules/app-routing.module';

export function isAuthenticated() {
  return localStorage.getItem("jwt");
}



const components = [
  AppComponent,
  HomeComponent,
  NavbarComponent,
  AdminComponent
]

@NgModule({
  declarations: [
    components,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    FontAwesomeModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: isAuthenticated,
        allowedDomains: ["localhost:7100"],
        disallowedRoutes: []
      }
    }),
    FormsModule,
    AppRouting

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
