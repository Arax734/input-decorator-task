import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponentComponent } from './student-list-component/student-list-component.component';
import { StudentCardComponentComponent } from './student-card-component/student-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponentComponent,
    StudentCardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
