import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './components/master.component';
import { DetailsComponent } from './components/details.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';


const appRoutes: Routes = [
  { path: '', component: MasterComponent },
  { path: 'book/:bookId', component: DetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
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
    HttpClientModule
  ],
  providers: [ BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
