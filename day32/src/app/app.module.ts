import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderComponent } from './components/order.component';

@NgModule({
    declarations: [
        AppComponent,
        OrderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule]
})
export class AppModule { }
