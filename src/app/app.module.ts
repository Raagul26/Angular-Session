import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    TodoListComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent] // root element
})
export class AppModule { }
