import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHART4Component } from './chart4.component';

describe('CHART4Component', () => {
  let component: CHART4Component;
  let fixture: ComponentFixture<CHART4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHART4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CHART4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
