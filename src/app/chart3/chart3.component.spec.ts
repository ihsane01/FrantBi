import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHART3Component } from './chart3.component';

describe('CHART3Component', () => {
  let component: CHART3Component;
  let fixture: ComponentFixture<CHART3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHART3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CHART3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
