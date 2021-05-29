import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() toggleSideBarEvent:EventEmitter<any>=new EventEmitter()
  toggleSideBar(){
   this.toggleSideBarEvent.emit()
  }

}
