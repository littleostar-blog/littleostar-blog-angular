import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdReaderComponent} from './components/md-reader/md-reader.component';
import {MdReaderNavComponent} from './components/md-reader-nav/md-reader-nav.component';
import {MdReaderBodyComponent} from './components/md-reader-body/md-reader-body.component';
import {MarkdownModule} from 'ngx-markdown';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdAppService} from './services/md-app.service';
import {MdBeanService} from './services/md-bean.service';

@NgModule({
  declarations: [
    MdReaderComponent,
    MdReaderNavComponent,
    MdReaderBodyComponent
  ],
  exports: [
    MdReaderComponent,
    MdReaderNavComponent,
    MdReaderBodyComponent,
  ],
  imports: [
    CommonModule,
    // NgbDropdownModule,
    NgbModule.forRoot(),
    MarkdownModule.forChild(),
    // MdReaderRoutingModule
  ],
  providers: [
    MdAppService,
    MdBeanService
  ]
})
export class MdReaderModule {
}
