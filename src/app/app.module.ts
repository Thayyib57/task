import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgpolComponent } from './orgpol/orgpol.component';
import { CreateComponent } from './orgpol/create/create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination'
import { TestInterceptor } from './interceptor/test.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    OrgpolComponent,
    CreateComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
