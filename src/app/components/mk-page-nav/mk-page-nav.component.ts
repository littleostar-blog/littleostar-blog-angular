import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mk-page-nav',
  templateUrl: './mk-page-nav.component.html',
  styleUrls: ['./mk-page-nav.component.css']
})
export class MkPageNavComponent implements OnInit, AfterViewInit {

  @ViewChildren('dropdownMenuButton')
  dropdownMenuButtonQueryList: QueryList<ElementRef<HTMLButtonElement>>;

  navList: Array<string>;

  itemList: Map<string, Array<string>> = new Map<string, Array<string>>();

  constructor(
    private route: ActivatedRoute,
  ) {

  }


  ngOnInit() {
    this.navList = ['A', 'B', 'C'];
    this.navList.map(x => {
      const arr = new Array<string>();
      for (let i = 0; i < 4; i++) {
        arr.push(x + i);
      }
      this.itemList.set(x, arr);
    });

    this.route.paramMap.subscribe(data => {
      console.log(JSON.stringify(data));
      const section = data.get('section');
    });
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(data => {
      const section = data.get('section');
      const item = data.get('item');

      const buttonElement = this.dropdownMenuButtonQueryList.find(element => element.nativeElement.textContent.includes(section));
      buttonElement.nativeElement.click();

    });
  }


}
