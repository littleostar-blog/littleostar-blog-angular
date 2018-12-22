import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MkPageBodyComponent} from './mk-page-body.component';

describe('MkPageBodyComponent', () => {
  let component: MkPageBodyComponent;
  let fixture: ComponentFixture<MkPageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MkPageBodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
