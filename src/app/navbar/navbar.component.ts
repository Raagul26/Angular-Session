import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  searchText:string = "Search here"
  @Input() parentData:string = ""
  @Output() data:EventEmitter<any> = new EventEmitter<any>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changed - navbar")
  }

  sendData()
  {
    this.data.emit("Child to parent")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
