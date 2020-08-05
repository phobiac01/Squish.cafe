import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishResultsComponent } from './squish-results.component';

describe('SquishResultsComponent', () => {
  let component: SquishResultsComponent;
  let fixture: ComponentFixture<SquishResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquishResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquishResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
