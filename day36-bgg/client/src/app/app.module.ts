import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game.component';
import { CommentComponent } from './components/comment.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BggService } from './service/bgg.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: GameComponent}, 
  { path: 'games', component: GameComponent}, 
  { path: 'game/:gameId/comments', component: CommentComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'} 
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
