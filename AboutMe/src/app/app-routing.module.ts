import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
  {path: 'my-projects', component: MyProjectsComponent},
  {path: 'https://nativmaatuk.github.io/AboutMe/home', component: MainComponent},
  {path: 'https://nativmaatuk.github.io/AboutMe/my-projects', component: MyProjectsComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
