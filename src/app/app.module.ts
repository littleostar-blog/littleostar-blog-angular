import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MdReaderComponent} from './md-reader/components/md-reader/md-reader.component';
import {MdReaderNavComponent} from './md-reader/components/md-reader-nav/md-reader-nav.component';
import {MdAppService} from './md-reader/services/md-app.service';
import {MdBeanService} from './md-reader/services/md-bean.service';
import {MdReaderBodyComponent} from './md-reader/components/md-reader-body/md-reader-body.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {CoreIndexComponent} from './core/components/core-index/core-index.component';
import {CoreIndexNavComponent} from './core/components/core-index-nav/core-index-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    MdReaderNavComponent,
    MdReaderBodyComponent,
    MdReaderComponent,

    PageNotFoundComponent,

    CoreIndexComponent,
    CoreIndexNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MarkdownModule.forRoot({loader: HttpClient}),

    AppRoutingModule,
  ],
  providers: [
    MdAppService,
    MdBeanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
