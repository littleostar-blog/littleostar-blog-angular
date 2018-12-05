import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MdReaderModule} from './md-reader/md-reader.module';
// import {AppRoutingModule} from './app-routing.module';
// import {SharedModule} from './shared/shared.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,

    // using specific option with FactoryProvider
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),

    // SharedModule,
    MdReaderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
