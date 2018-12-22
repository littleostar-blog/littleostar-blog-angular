import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mk-page',
  templateUrl: './mk-page.component.html',
  styleUrls: ['./mk-page.component.css']
})
export class MkPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

}
