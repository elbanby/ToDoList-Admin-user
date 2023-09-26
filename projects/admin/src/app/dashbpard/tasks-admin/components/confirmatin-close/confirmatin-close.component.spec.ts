import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatinCloseComponent } from './confirmatin-close.component';

describe('ConfirmatinCloseComponent', () => {
  let component: ConfirmatinCloseComponent;
  let fixture: ComponentFixture<ConfirmatinCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmatinCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmatinCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
