import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import {CustomMaterialModule} from './modules/custommaterial.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {AppRoutingModule} from './app-routing.module';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {UploadImageService} from './services/upload-image.service';
import {AddBookService} from './services/add-book.service';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    AppRoutingModule

  ],
  providers: [AuthService, UploadImageService, AddBookService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
