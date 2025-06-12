import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONNEXIONComponent } from './connexion.component';

describe('CONNEXIONComponent', () => {
  let component: CONNEXIONComponent;
  let fixture: ComponentFixture<CONNEXIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CONNEXIONComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CONNEXIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
