import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipseComponent } from './ellipse.component';

describe('EllipseComponent', () => {
  let component: EllipseComponent;
  let fixture: ComponentFixture<EllipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllipseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
