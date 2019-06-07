import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ServersComponent } from 'src/servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ImageComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
