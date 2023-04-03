import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProjectComponent } from './footer-project.component';

describe('FooterProjectComponent', () => {
  let component: FooterProjectComponent;
  let fixture: ComponentFixture<FooterProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
