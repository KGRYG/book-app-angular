import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';
import {AuthGuard} from './services/auth-guard.service';
import {BookListComponent} from './components/book-list/book-list.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'addNewBook', component: AddNewBookComponent, canActivate: [AuthGuard]},
  {path: 'booklist', component: BookListComponent, canActivate: [AuthGuard]},
  {path: 'viewBook/:id', component: ViewBookComponent, canActivate: [AuthGuard]},
  {path: 'editBook/:id', component: EditBookComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
