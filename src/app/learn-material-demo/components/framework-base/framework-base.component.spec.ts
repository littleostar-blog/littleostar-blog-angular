import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FrameworkBaseComponent} from './framework-base.component';

describe('FrameworkBaseComponent', () => {
  let component: FrameworkBaseComponent;
  let fixture: ComponentFixture<FrameworkBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkBaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
