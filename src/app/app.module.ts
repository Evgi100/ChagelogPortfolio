import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import {PortfolioProjectsComponent} from './projects/projects.component';
import { ChangelogComponent } from './changelog/changelog.component'

@NgModule({
  declarations: [
    AppComponent,
    PortfolioProjectsComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
