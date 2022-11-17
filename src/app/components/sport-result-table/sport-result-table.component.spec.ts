import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportResultTableComponent } from './sport-result-table.component';

describe('SportResultTableComponent', () => {
  let component: SportResultTableComponent;
  let fixture: ComponentFixture<SportResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportResultTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
