import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {UserViewComponent} from "./pages/user-view/user-view.component";
import {C404Component} from "./pages/c404/c404.component";

const routes: Routes = [
   {path: "", pathMatch: 'full', redirectTo: 'home'},
   {path: "home", component:HomeComponent},
   {path: "newuser", component:UserFormComponent},
   {path: "updateuser/:iduser", component: UserFormComponent},
   {path: "viewuser/:iduser", component: UserViewComponent},
   {path: "**", component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
