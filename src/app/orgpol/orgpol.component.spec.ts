import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgpolComponent } from './orgpol.component';

describe('OrgpolComponent', () => {
  let component: OrgpolComponent;
  let fixture: ComponentFixture<OrgpolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgpolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgpolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
