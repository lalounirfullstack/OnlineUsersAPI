//Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

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
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserViewComponent,
    C404Component,
    HeaderComponent,
    UserFormComponent,
    UserCardComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, SweetAlert2Module.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
