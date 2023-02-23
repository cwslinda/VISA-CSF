import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { UploadComponent } from './components/upload.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'upload/:postId', component: UploadComponent},
  {path: "**",  redirectTo: "/", pathMatch:  'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
