import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MdReaderNavComponent} from './md-reader-nav.component';

describe('MdReaderNavComponent', () => {
  let component: MdReaderNavComponent;
  let fixture: ComponentFixture<MdReaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MdReaderNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdReaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
