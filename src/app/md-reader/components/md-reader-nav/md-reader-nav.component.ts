import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MdBean} from '../../models/md-bean';
import {Subscription, timer} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {MdBeanService} from '../../services/md-bean.service';
import {MdAppService} from '../../services/md-app.service';

@Component({
  selector: 'app-md-reader-nav',
  templateUrl: './md-reader-nav.component.html',
  styleUrls: ['./md-reader-nav.component.css']
})
export class MdReaderNavComponent implements OnInit, OnDestroy {

  data_array: Array<string>;
  data_array_item: Array<MdBean>;

  private subscription_array: Subscription;
  private subscription_array_item: Subscription;

  constructor(
    private changeRef: ChangeDetectorRef,
    private title: Title,
    private appService: MdAppService,
    private beanService: MdBeanService,
  ) {
  }

  ngOnDestroy(): void {
    this.data_array = null;
    this.data_array_item = null;

    if (this.subscription_array) {
      this.subscription_array.unsubscribe();
    }
    if (this.subscription_array_item) {
      this.subscription_array_item.unsubscribe();
    }
  }

  ngOnInit() {
    timer(0).subscribe(() => {
      this.subscription_array = this.appService.ob_array$.subscribe(data => this.data_array = data);
      this.changeRef.detectChanges();
    });
  }

  click_item(bean: MdBean) {
    this.title.setTitle(bean.md_title);
    this.beanService.sendData(bean);
    this.beanService.dealLinkUrl(bean);
  }

  click_arr(str: string) {
    this.data_array_item = null;
    timer(0).subscribe(() => {
      this.subscription_array_item = this.appService.getJson('md_array', str).subscribe(data => {
        this.data_array_item = data;
      });
      this.changeRef.detectChanges();
    });
  }

}
