import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { KollywoodComponent } from './kollywood/kollywood.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { HeaderComponent } from './header/header.component';
import { HwoodmovielistComponent } from './hollywood/hwoodmovielist/hwoodmovielist.component';

@NgModule({
  declarations: [
    AppComponent,
    BollywoodComponent,
    HollywoodComponent,
    KollywoodComponent,
    AddmoviesComponent,
    HeaderComponent,
    HwoodmovielistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
