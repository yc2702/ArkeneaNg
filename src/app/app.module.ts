import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { RouterModule } from '@angular/router';
import { CreateuserComponent } from './pages/createuser/createuser.component';

import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

const route = [
  { path: '', component: UserComponent },
  { path: 'createuser', component: CreateuserComponent },
  { path: 'updateUser/:id', component: CreateuserComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
