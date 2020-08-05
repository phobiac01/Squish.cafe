import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishSubmitComponent } from './squish-submit.component';

describe('SquishSubmitComponent', () => {
  let component: SquishSubmitComponent;
  let fixture: ComponentFixture<SquishSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquishSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
