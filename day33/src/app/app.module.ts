import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details.component';
import { FriendsListComponent } from './components/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
