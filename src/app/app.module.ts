import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { TemplateDocumentComponent } from './template/template-document/template-document.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    HomeComponent,
    UploadComponent,
    SearchComponent,
    TopBarComponent,
    TemplateDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
