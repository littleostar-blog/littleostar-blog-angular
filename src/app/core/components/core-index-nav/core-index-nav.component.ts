import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-core-index-nav',
  templateUrl: './core-index-nav.component.html',
  styleUrls: ['./core-index-nav.component.css']
})
export class CoreIndexNavComponent implements OnInit, OnDestroy {
  home_name = 'LITTLEOSTAR';
  home_image = 'assets/home/favicon_home_img.ico';
  data_array = ['md'];

  constructor(
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
  }

  click_item(arr: string) {
    if (arr) {
      this.titleService.setTitle(arr);
    }
  }

}
