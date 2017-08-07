import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list.component';
import { LettersOnlyDirective } from './letters-only.directive';
import { Reverse } from './reverse';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LettersOnlyDirective,
    Reverse
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
