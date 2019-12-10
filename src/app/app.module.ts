import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { KollywoodComponent } from './kollywood/kollywood.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { HeaderComponent } from './header/header.component';
import { HwoodDetailComponent } from './hollywood/hwood-detail/hwood-detail.component';
import { HwoodEditComponent } from './hollywood/hwood-edit/hwood-edit.component';
import { HwoodListComponent } from './hollywood/hwood-list/hwood-list.component';
import { HwoodViewComponent } from './hollywood/hwood-view/hwood-view.component';
import { HwoodItemComponent } from './hollywood/hwood-item/hwood-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BollywoodComponent,
    HollywoodComponent,
    KollywoodComponent,
    AddmoviesComponent,
    HeaderComponent,
    HwoodDetailComponent,
    HwoodEditComponent,
    HwoodListComponent,
    HwoodViewComponent,
    HwoodItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
