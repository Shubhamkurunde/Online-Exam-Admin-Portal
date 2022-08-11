import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddquestionComponent } from './pages/addquestion/addquestion.component';
import { UpdatequestionComponent } from './pages/updatequestion/updatequestion.component';
import { ViewquestionComponent } from './pages/viewquestion/viewquestion.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'add', component: AddquestionComponent },
      { path: 'view', component: ViewquestionComponent },
      { path: 'update/:question_id', component: UpdatequestionComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
