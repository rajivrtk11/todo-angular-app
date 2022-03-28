import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './my-components/about-component/about-component.component';
import { TodosComponent } from './my-components/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponentComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
