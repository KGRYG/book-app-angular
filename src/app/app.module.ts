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
import {BookListComponent, DialogResultExampleDialogComponent} from './components/book-list/book-list.component';
import {GetBookListService} from './services/get-book-list.service';
import {RemoveBookService} from './services/remove-book.service';
import { ViewBookComponent } from './components/view-book/view-book.component';
import {GetBookService} from './services/get-book.service';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from './services/edit-book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialogComponent,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  entryComponents: [DialogResultExampleDialogComponent],
  providers: [
    AuthService,
    UploadImageService,
    AddBookService,
    AuthGuard,
    GetBookListService,
    RemoveBookService,
    GetBookService,
    EditBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
