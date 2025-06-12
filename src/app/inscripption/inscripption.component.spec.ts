import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INSCRIPPTIONComponent } from './inscripption.component';

describe('INSCRIPPTIONComponent', () => {
  let component: INSCRIPPTIONComponent;
  let fixture: ComponentFixture<INSCRIPPTIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [INSCRIPPTIONComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INSCRIPPTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
