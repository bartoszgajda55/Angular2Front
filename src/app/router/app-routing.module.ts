import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from '../components/articles/articles.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }