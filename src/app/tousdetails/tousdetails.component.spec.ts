import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousdetailsComponent } from './tousdetails.component';

describe('TousdetailsComponent', () => {
  let component: TousdetailsComponent;
  let fixture: ComponentFixture<TousdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TousdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TousdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
