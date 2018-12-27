import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MdReaderBodyComponent} from './md-reader-body.component';

describe('MdReaderBodyComponent', () => {
  let component: MdReaderBodyComponent;
  let fixture: ComponentFixture<MdReaderBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MdReaderBodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdReaderBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
