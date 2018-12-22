import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MkPageComponent} from './mk-page.component';

describe('MkPageComponent', () => {
  let component: MkPageComponent;
  let fixture: ComponentFixture<MkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MkPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
