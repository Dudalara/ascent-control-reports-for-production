import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIndividualViewComponent } from './report-individual-view.component';

describe('ReportIndividualViewComponent', () => {
  let component: ReportIndividualViewComponent;
  let fixture: ComponentFixture<ReportIndividualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportIndividualViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportIndividualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
