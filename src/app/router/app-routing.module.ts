import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from '../components/articles/articles.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { LoginComponent } from '../components/login/login.component';

import { CategoriesGuard } from './guards/categories-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles', component: ArticlesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent, canActivate: [CategoriesGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }