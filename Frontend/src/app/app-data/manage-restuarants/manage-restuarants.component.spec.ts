import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestuarantsComponent } from './manage-restuarants.component';

describe('ManageRestuarantsComponent', () => {
  let component: ManageRestuarantsComponent;
  let fixture: ComponentFixture<ManageRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRestuarantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
