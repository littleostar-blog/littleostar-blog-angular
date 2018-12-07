import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  home_name = 'LITTLEOSTAR';
  home_image = 'assets/home/favicon_home_img.ico';
  // home_github = 'https://github.com/littleostar-blog/littleostar-blog.github.io';
  // home_github_name = 'GitHub';
  data_map: Map<string, Array<MdBean>>;

  private subscription_array: Subscription;
  private subscription_map: Subscription;

  @ViewChild('navbarToggle') private navbarToggle: ElementRef<HTMLButtonElement>;
  @ViewChild('nav') private nav: ElementRef<HTMLElement>;

  constructor(
    private changeRef: ChangeDetectorRef,
    private title: Title,
    private appService: MdAppService,
    private beanService: MdBeanService,
  ) {
  }

  ngOnDestroy(): void {
    this.home_name = null;
    this.home_image = null;
    // this.home_github = null;
    // this.home_github_name = null;
    this.data_map = null;
    this.subscription_array.unsubscribe();
    this.subscription_map.unsubscribe();
    this.nav = null;
    this.navbarToggle = null;
  }

  ngOnInit() {
    timer(300).subscribe(() => {
      this.subscription_map = this.appService.ob_map$.subscribe(data => this.data_map = data);
      this.changeRef.detectChanges();
    });
  }

  // (click)="clickLoadRemote(arr)"
  clickLoadRemote(bean: MdBean) {
    // console.log(`${bean.md_url}`);

    if (this.nav.nativeElement.offsetWidth <= (992 - 15 * 2)) { // when collapse, click toggle to hide menu
      this.navbarToggle.nativeElement.click();
    }
    this.title.setTitle(bean.md_title);
    this.beanService.sendData(bean);
    this.beanService.dealLinkUrl(bean);
  }

}
