import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHART2Component } from './chart2.component';

describe('CHART2Component', () => {
  let component: CHART2Component;
  let fixture: ComponentFixture<CHART2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHART2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CHART2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
