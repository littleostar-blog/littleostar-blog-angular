import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MdBean} from '../../models/md-bean';
import {Subscription} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {MdBeanService} from '../../services/md-bean.service';
import {MdAppService} from '../../services/md-app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-md-reader-nav',
  templateUrl: './md-reader-nav.component.html',
  styleUrls: ['./md-reader-nav.component.css']
})
export class MdReaderNavComponent implements OnInit, OnDestroy {

  @Input()
  nav: string;
  @Input()
  item: string;

  dataNavArray: Array<string>;
  dataItemArray: Array<MdBean>;

  private subscription_array: Subscription;
  private subscription_array_item: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private changeRef: ChangeDetectorRef,
    private title: Title,
    private appService: MdAppService,
    private beanService: MdBeanService,
  ) {
  }

  ngOnDestroy(): void {
    this.dataNavArray = null;
    this.dataItemArray = null;

    if (this.subscription_array) {
      this.subscription_array.unsubscribe();
    }
    if (this.subscription_array_item) {
      this.subscription_array_item.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription_array = this.appService.getNavList().subscribe(data => {
      this.dataNavArray = data;
      this.changeRef.detectChanges();
    });
  }

  click_item(bean: MdBean) {
    this.title.setTitle(bean.md_title);
    this.beanService.sendData(bean);
  }

  click_nav(nav: string) {
    this.dataItemArray = null;
    this.subscription_array_item = this.appService.getItemList(nav).subscribe(data => {
      this.dataItemArray = data;
      this.changeRef.detectChanges();
    });
  }

}
