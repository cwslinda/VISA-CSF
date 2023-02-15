import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MasterComponent } from './components/master.component';
import { DetailsComponent } from './components/details.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PostService } from './service/post.service';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "", component: MasterComponent},
  { path: "details", component:  DetailsComponent},
  { path: "**", redirectTo: '/', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
