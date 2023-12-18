import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHART1Component } from './chart1.component';

describe('CHART1Component', () => {
  let component: CHART1Component;
  let fixture: ComponentFixture<CHART1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHART1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CHART1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
