import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPdfComponent } from './form-add-pdf.component';

describe('FormAddPdfComponent', () => {
  let component: FormAddPdfComponent;
  let fixture: ComponentFixture<FormAddPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
