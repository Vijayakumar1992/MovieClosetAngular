import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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
import { HollywoodService } from './hollywood/hollywood.service';
import { BwoodDetailComponent } from './bollywood/bwood-detail/bwood-detail.component';
import { BwoodEditComponent } from './bollywood/bwood-edit/bwood-edit.component';
import { BwoodItemComponent } from './bollywood/bwood-item/bwood-item.component';
import { BwoodListComponent } from './bollywood/bwood-list/bwood-list.component';
import { KwoodDetailComponent } from './kollywood/kwood-detail/kwood-detail.component';
import { KwoodEditComponent } from './kollywood/kwood-edit/kwood-edit.component';
import { KwoodItemComponent } from './kollywood/kwood-item/kwood-item.component';
import { KwoodListComponent } from './kollywood/kwood-list/kwood-list.component';
import { BollywoodService } from './bollywood/bollywood.service';

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
    BwoodDetailComponent,
    BwoodEditComponent,
    BwoodItemComponent,
    BwoodListComponent,
    KwoodDetailComponent,
    KwoodEditComponent,
    KwoodItemComponent,
    KwoodListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HollywoodService, BollywoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
