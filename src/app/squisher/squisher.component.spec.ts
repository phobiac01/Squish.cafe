import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquisherComponent } from './squisher.component';

describe('SquisherComponent', () => {
  let component: SquisherComponent;
  let fixture: ComponentFixture<SquisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
