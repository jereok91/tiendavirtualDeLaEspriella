import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CailidadBanerComponent } from './cailidad-baner.component';

describe('CailidadBanerComponent', () => {
  let component: CailidadBanerComponent;
  let fixture: ComponentFixture<CailidadBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CailidadBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CailidadBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
