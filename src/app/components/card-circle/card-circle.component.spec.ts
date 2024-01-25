import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCircleComponent } from './card-circle.component';

describe('CardCircleComponent', () => {
  let component: CardCircleComponent;
  let fixture: ComponentFixture<CardCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCircleComponent]
    });
    fixture = TestBed.createComponent(CardCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
