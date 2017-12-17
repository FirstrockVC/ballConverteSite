import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Routing } from './app.routes';
import { UploadFileComponent } from './components/uploadFile/uploadFile.component';
import { AppComponent } from './app.component';
import { FileDropModule } from 'ngx-file-drop';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent
  ],
  imports: [
    HttpModule,
    Routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FileDropModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
