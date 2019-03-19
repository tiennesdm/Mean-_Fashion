import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AngularMaterialForm } from './angular-material.module';
import { HeadersComponent } from './headers/headers.component';
import { MenComponent } from './trend/men/men.component';
import { WomenComponent } from './trend/women/women.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './error-interceptor';
import { CreateComponent } from './admin/create/create.component';
import { ListComponent } from './admin/list/list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import 'hammerjs';
/* import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material'; */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadersComponent,
    MenComponent,
    WomenComponent,
    ErrorComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialForm,
    HttpClientModule,
    FlexLayoutModule,
    TooltipModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
