import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MkPageNavComponent} from './mk-page-nav.component';

describe('MkPageNavComponent', () => {
  let component: MkPageNavComponent;
  let fixture: ComponentFixture<MkPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MkPageNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
