import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportResultComponent } from './sport-result.component';

describe('SportResultComponent', () => {
  let component: SportResultComponent;
  let fixture: ComponentFixture<SportResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
