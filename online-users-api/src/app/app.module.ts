//Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { C404Component } from './pages/c404/c404.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserViewComponent,
    C404Component,
    HeaderComponent,
    UserFormComponent,
    UserCardComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
