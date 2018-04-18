import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPdfsComponent } from './list-pdfs.component';

describe('ListPdfsComponent', () => {
  let component: ListPdfsComponent;
  let fixture: ComponentFixture<ListPdfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPdfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
