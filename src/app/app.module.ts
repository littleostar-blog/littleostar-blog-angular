import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MdReaderComponent} from './components/md-reader/md-reader.component';
import {MdReaderNavComponent} from './components/md-reader-nav/md-reader-nav.component';
import {MdReaderBodyComponent} from './components/md-reader-body/md-reader-body.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CoreIndexComponent} from './components/core-index/core-index.component';
import {CoreIndexNavComponent} from './components/core-index-nav/core-index-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    CoreIndexComponent,
    CoreIndexNavComponent,

    MdReaderNavComponent,
    MdReaderBodyComponent,
    MdReaderComponent,

    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    AppRoutingModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
