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

// function that returns `MarkedOptions` with renderer override
// export function markedOptionsFactory(): MarkedOptions {
//   const renderer = new MarkedRenderer();
//
//   renderer.blockquote = (text: string) => {
//     return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
//   };
//
//   return {
//     renderer: renderer,
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false,
//   };
// }

@NgModule({
  declarations: [
    AppComponent,

    MdReaderNavComponent,
    MdReaderBodyComponent,
    MdReaderComponent,

    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MarkdownModule.forRoot({
      loader: HttpClient,
      // markedOptions: {
      //   provide: MarkedOptions,
      //   useFactory: markedOptionsFactory,
      // },
    }),

    AppRoutingModule,
    // SharedModule,
    // MdReaderModule,
    // LearnMaterialDemoModule,

  ],
  providers: [
    MdAppService,
    MdBeanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
