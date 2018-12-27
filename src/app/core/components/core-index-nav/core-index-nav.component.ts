import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {timer} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-core-index-nav',
  templateUrl: './core-index-nav.component.html',
  styleUrls: ['./core-index-nav.component.css']
})
export class CoreIndexNavComponent implements OnInit, OnDestroy {
  // home_name = 'LITTLEOSTAR';
  home_name = 'Home';
  // home_image = 'assets/home/favicon_home_img.ico';
  home_image = null;
  data_array = ['md'];

  constructor(
    private router: Router,
    private changeRef: ChangeDetectorRef,
    private titleService: Title,
  ) {
  }

  ngOnDestroy(): void {
    this.home_name = null;
    this.home_image = null;
    this.data_array = null;
  }

  ngOnInit() {
    timer(0).subscribe(() => {
      this.titleService.setTitle(this.home_name);
      this.router.navigateByUrl('md');
    });
  }

  click_item(arr: string) {
    if (arr) {
      this.titleService.setTitle(arr);
    }
  }

}
