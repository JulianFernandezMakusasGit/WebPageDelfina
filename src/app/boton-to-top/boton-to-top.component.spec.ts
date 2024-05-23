import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonToTopComponent } from './boton-to-top.component';

describe('BotonToTopComponent', () => {
  let component: BotonToTopComponent;
  let fixture: ComponentFixture<BotonToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonToTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
