import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }

  timeIntervalInstance:any = null

  ngOnChanges(changes: SimpleChanges): void {
      console.log("changed")
  }

  ngOnInit(): void {
    console.log("Main component initialized")
    this.timeIntervalInstance = setInterval(()=>
    {
      console.log(new Date())
    }, 2000)
  }

  ngOnDestroy(): void {
      console.log("Main component destroyed")
      clearInterval(this.timeIntervalInstance)
  }

  title = "angular main content"
  toDateTime = new Date();
  numbers = [1,2,3,4,5,6,7,8,9]
  
  hide:boolean = false
 
  toggle(){
    this.hide=!this.hide
  }

  students = [{name:"Ajay",mark:512},{name:"Vinith",mark:543},{name:"Sanjay",mark:342},{name:"Vishnu",mark:398}]
  isLoggedIn = false

 
}
