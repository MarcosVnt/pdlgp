import { PartidoService } from './services/partido.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { PadelgpComponent } from './padelgp/padelgp.component';
import { PartidoListComponent } from './padelgp/partido-list/partido-list.component';
import { PartidoComponent } from './padelgp/partido-list/partido.component';
import { PartidoDetailComponent } from './padelgp/partido-detail/partido-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import {routes} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PadelgpComponent,
    PartidoListComponent,
    PartidoComponent,
    PartidoDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PartidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
