import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingSurfaceComponent } from './drawing-surface.component';

describe('DrawingSurfaceComponent', () => {
  let component: DrawingSurfaceComponent;
  let fixture: ComponentFixture<DrawingSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawingSurfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawingSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
