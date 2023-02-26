import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketWindow',
  templateUrl: './ticketWindow.component.html',
  styleUrls: ['./ticketWindow.component.css']
})
export class TicketWindowComponent implements OnInit {

  enableButton=false;
  ticketstatus="notBooked";

  constructor() { }

  ngOnInit(): void {
  }

 testFun(eventListener:Event){
    console.log(eventListener);
    this.ticketstatus=(<HTMLInputElement>eventListener.target).innerText;
    alert("Tested ");
    this.enableButton = true;

  }


}