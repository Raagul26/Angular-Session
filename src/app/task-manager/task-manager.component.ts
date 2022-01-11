import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("Task manager component initialized")
  }

  ngOnDestroy(): void {
      console.log("Task manager component destroyed")
  }

}
