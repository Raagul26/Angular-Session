import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
