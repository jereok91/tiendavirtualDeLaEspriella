import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducBanerComponent } from './produc-baner.component';

describe('ProducBanerComponent', () => {
  let component: ProducBanerComponent;
  let fixture: ComponentFixture<ProducBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
