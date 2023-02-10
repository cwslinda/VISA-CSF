import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MasterComponent } from './components/master.component';
import { DetailsComponent } from './components/details.component';
import { WeatherService } from './weather.service';

const appRoutes: Routes = [
  { path: '', component: MasterComponent},
  { path: 'weather/:city', component: DetailsComponent},
  { path: '**', redirectTo: '/',  pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
