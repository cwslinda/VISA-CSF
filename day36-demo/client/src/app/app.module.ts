import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PolarBearComponent } from './components/polar-bear.component';
import { MalteseComponent } from './components/maltese.component';
import { HomeComponent } from './components/home.component';
import { CustomerComponent } from './components/customer.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maltese', component: MalteseComponent },
  { path: 'polar-bear', component: PolarBearComponent },
  { path: 'customer/:custName', component: CustomerComponent },
  { path:  '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PolarBearComponent,
    MalteseComponent,
    HomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
