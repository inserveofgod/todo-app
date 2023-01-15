import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoNewComponent } from './todo/todo-new/todo-new.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoShowComponent } from './todo/todo-show/todo-show.component';
import { TodoDeleteComponent } from './todo/todo-delete/todo-delete.component';
import { TodoIndexComponent } from './todo/todo-index/todo-index.component';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodoFormComponent,
    TodoEditComponent,
    TodoShowComponent,
    TodoDeleteComponent,
    TodoIndexComponent,
    ErrorNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
