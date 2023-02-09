import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { UploadComponent } from './components/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { CameraService } from './service/camera.service';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  {path: '', component: CameraComponent},
  {path: 'upload', component: UploadComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule

  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
