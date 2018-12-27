import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MdReaderComponent} from './md-reader.component';

describe('MdReaderComponent', () => {
  let component: MdReaderComponent;
  let fixture: ComponentFixture<MdReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MdReaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
