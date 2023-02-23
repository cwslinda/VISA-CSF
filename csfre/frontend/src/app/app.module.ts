import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { ItemService } from './service/item.service';
import { AfterPostComponent } from './components/after-post.component';
import { ConfirmItemComponent } from './components/confirm-item.component';
import { SharingService } from './service/sharing.service';

const appRoutes: Routes = [
  { path: '', component: FormComponent},
  { path: 'post/:postingId', component: AfterPostComponent },
  { path: 'confirm/:postingId', component: ConfirmItemComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AfterPostComponent,
    ConfirmItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ItemService, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
