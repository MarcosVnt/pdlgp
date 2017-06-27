import { ModuleWithProviders } from '@angular/core';
import { PadelgpComponent } from './padelgp/padelgp.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo:'/padelgp', pathMatch: 'full'},
  { path: 'padelgp', component: PadelgpComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];


export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);


