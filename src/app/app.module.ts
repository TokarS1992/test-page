import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { ListTemplatesComponent } from './componets/list-templates/list-templates.component';
import { TemplateViewComponent } from './componets/template-view/template-view.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewComponent,
    ListTemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    QuillEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
