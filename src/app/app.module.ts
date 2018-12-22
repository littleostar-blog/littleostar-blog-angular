import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MkPageComponent} from './components/mk-page/mk-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {HomePageNavComponent} from './components/home-page-nav/home-page-nav.component';
import {MkPageNavComponent} from './components/mk-page-nav/mk-page-nav.component';
import {MkPageBodyComponent} from './components/mk-page-body/mk-page-body.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageNavComponent,

    MkPageComponent,
    MkPageNavComponent,
    MkPageBodyComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
