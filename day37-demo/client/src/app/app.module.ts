import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
