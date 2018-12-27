import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-md-reader',
  templateUrl: './md-reader.component.html',
  styleUrls: ['./md-reader.component.css']
})
export class MdReaderComponent implements OnInit {

  nav: string;
  item: string;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.nav = data.get('nav');
      this.item = data.get('item');
    });
  }

}
