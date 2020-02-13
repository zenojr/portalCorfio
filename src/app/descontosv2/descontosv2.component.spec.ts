import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Descontosv2Component } from './descontosv2.component';

describe('Descontosv2Component', () => {
  let component: Descontosv2Component;
  let fixture: ComponentFixture<Descontosv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Descontosv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Descontosv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
