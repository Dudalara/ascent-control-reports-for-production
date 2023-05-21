import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingInformationComponent } from './reporting-information.component';

describe('ReportingInformationComponent', () => {
  let component: ReportingInformationComponent;
  let fixture: ComponentFixture<ReportingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
