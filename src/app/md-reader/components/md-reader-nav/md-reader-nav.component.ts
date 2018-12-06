import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MdBean} from '../../models/md-bean';
import {Subscription, timer} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {MdBeanService} from '../../services/md-bean.service';
import {MdAppService} from '../../services/md-app.service';
import {take} from 'rxjs/operators';

// import {Router} from '@angular/router';

@Component({
  selector: 'app-md-reader-nav',
  templateUrl: './md-reader-nav.component.html',
  styleUrls: ['./md-reader-nav.component.css']
})
export class MdReaderNavComponent implements OnInit, OnDestroy {

  home_name = 'LITTLEOSTAR';
  home_image = 'assets/home/favicon_home_img.ico';
  // data_array: string[];
  data_map: Map<string, Array<MdBean>>;

  private subscription_array: Subscription;
  private subscription_map: Subscription;

  @ViewChild('navbarToggle') private navbarToggle: ElementRef<HTMLButtonElement>;
  @ViewChild('nav') private nav: ElementRef<HTMLElement>;

  constructor(
    private changeRef: ChangeDetectorRef,
    // private router: Router,
    private title: Title,
    private appService: MdAppService,
    private beanService: MdBeanService,
  ) {
  }

  ngOnInit() {
    timer(500).pipe(
      take(1)
    ).subscribe(() => {
      // this.subscription_array = this.appService.ob_array$.subscribe(data => this.data_array = data);
      this.subscription_map = this.appService.ob_map$.subscribe(data => this.data_map = data);
      this.changeRef.detectChanges();
    });
  }

  // (click)="clickLoadRemote(arr)"
  clickLoadRemote(key: string, arr: MdBean) {
    // console.log(`${arr.md_url}`);

    if (this.nav.nativeElement.offsetWidth <= (992 - 15 * 2)) { // when collapse, click toggle to hide menu
      this.navbarToggle.nativeElement.click();
    }
    this.title.setTitle(arr.md_title);
    this.beanService.sendData(arr);
    this.beanService.dealLinkUrl(arr);
  }

  ngOnDestroy(): void {
    this.subscription_array.unsubscribe();
    this.subscription_map.unsubscribe();
  }

}
