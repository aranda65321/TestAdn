import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatrixComponent } from './form-matrix.component';

describe('FormMatrixComponent', () => {
  let component: FormMatrixComponent;
  let fixture: ComponentFixture<FormMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
