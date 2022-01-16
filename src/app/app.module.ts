import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
