import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoIndexComponent} from "./todo/todo-index/todo-index.component";
import {ErrorNotFoundComponent} from "./errors/error-not-found/error-not-found.component";
import {TodoNewComponent} from "./todo/todo-new/todo-new.component";
import {TodoShowComponent} from "./todo/todo-show/todo-show.component";
import {TodoEditComponent} from "./todo/todo-edit/todo-edit.component";

const routes: Routes = [
  {path: "**", component: ErrorNotFoundComponent},
  {path: '/', redirectTo: "/todo"},
  {path: '/todo', component: TodoIndexComponent},
  {path: '/todo/edit/:id', component: TodoEditComponent},
  {path: '/todo/:id', component: TodoShowComponent},
  {path: '/todo/new', component: TodoNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
