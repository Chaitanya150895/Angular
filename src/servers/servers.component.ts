import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  template: '<app-servers></app-servers><app-servers></app-servers>', // single line
 // template: `<app-servers></app-servers>
 // <app-servers></app-servers>`, // multi-line 
  styleUrls: ['./servers.component.css']
   //styleUrls: ['./servers.component.css']

   styles: [`
   p{
     color: red;
   }
 `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}