import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerraComponent } from './guerra.component';

describe('GuerraComponent', () => {
  let component: GuerraComponent;
  let fixture: ComponentFixture<GuerraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
