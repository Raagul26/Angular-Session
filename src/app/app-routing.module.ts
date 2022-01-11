import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path:"",component:MainContentComponent},
  {path:"todo",component:TodoListComponent},
  {path:"taskmanager", component:TaskManagerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
