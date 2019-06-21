import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCardContainerComponent } from './responsive-card-container.component';

describe('ResponsiveCardContainerComponent', () => {
  let component: ResponsiveCardContainerComponent;
  let fixture: ComponentFixture<ResponsiveCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
