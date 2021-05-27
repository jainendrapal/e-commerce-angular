import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { ProductListService } from '././product-list.service';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
    NgMatSearchBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule




  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
