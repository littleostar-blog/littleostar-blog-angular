import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-md-reader',
  templateUrl: './md-reader.component.html',
  styleUrls: ['./md-reader.component.css']
})
export class MdReaderComponent implements OnInit {
  @ViewChild('div') private div: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    // console.log(`${this.div.nativeElement.clientWidth}`);
  }


}
