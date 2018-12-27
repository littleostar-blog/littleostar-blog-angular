import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MdBean} from '../../models/md-bean';
import {Subscription} from 'rxjs';
import {MdBeanService} from '../../services/md-bean.service';
import {MdAppService} from '../../services/md-app.service';

@Component({
  selector: 'app-md-reader-body',
  templateUrl: './md-reader-body.component.html',
  styleUrls: ['./md-reader-body.component.css']
})
export class MdReaderBodyComponent implements OnInit, OnDestroy {
  @Input()
  nav: string;
  @Input()
  item: string;

  bean_remote: MdBean = null;
  private subscription_bean: Subscription;

  constructor(
    private changeRef: ChangeDetectorRef,
    private beanService: MdBeanService,
    private appService: MdAppService,
  ) {
  }

  ngOnDestroy(): void {
    this.bean_remote = null;
    if (this.subscription_bean) {
      this.subscription_bean.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription_bean = this.beanService.bean_remote$.subscribe(data => this.dealBeanToHtml(data));
    if (this.item) {
      this.appService.getItem(this.nav, this.item).subscribe(data => this.dealBeanToHtml(data));
    }
  }

  private dealBeanToHtml(data) {
    if (data) {
      this.bean_remote = data;
      this.changeRef.detectChanges();
    }
  }
}
