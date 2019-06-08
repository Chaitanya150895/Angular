import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
   //styleUrls: ['./servers.component.css']

  // styles: [`
  // p{
   //  color: red;
   //}
 //`]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000 );

    setTimeout( () => {
      this.allowNewServer = false;
    }, 4000 );
  }

  onClick()
  {
    alert ("hello-world");
  }

  serverName = '';

  onUpdateServerName(event)
  {
    this.serverName = event.target.value;
    //or use any of this
    this.serverName = (<HTMLInputElement> event.target).value;
  }

 

  ngOnInit() {
  }

}