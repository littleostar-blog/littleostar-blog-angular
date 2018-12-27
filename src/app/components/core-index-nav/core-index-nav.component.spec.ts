import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreIndexNavComponent} from './core-index-nav.component';

describe('CoreIndexNavComponent', () => {
  let component: CoreIndexNavComponent;
  let fixture: ComponentFixture<CoreIndexNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoreIndexNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreIndexNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
