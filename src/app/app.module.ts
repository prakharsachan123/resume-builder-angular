import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormForResumeComponent } from './form-for-resume/form-for-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    FormForResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
