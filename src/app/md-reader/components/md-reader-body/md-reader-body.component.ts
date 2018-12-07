import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MdBean} from '../../models/md-bean';
import {Subscription} from 'rxjs';
import {MdBeanService} from '../../services/md-bean.service';

@Component({
  selector: 'app-md-reader-body',
  templateUrl: './md-reader-body.component.html',
  styleUrls: ['./md-reader-body.component.css']
})
export class MdReaderBodyComponent implements OnInit, OnDestroy {

  bean_remote: MdBean = null;
  private subscription_bean: Subscription;

  constructor(
    private changeRef: ChangeDetectorRef,
    private beanService: MdBeanService,
  ) {
  }

  ngOnDestroy(): void {
    this.bean_remote = null;
    this.subscription_bean.unsubscribe();
  }

  ngOnInit() {
    this.subscription_bean = this.beanService.bean_remote$.subscribe(bean => this.bean_remote = bean);
    this.changeRef.detectChanges();
  }

}
