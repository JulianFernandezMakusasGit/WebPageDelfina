import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionProyectosComponent } from './barra-navegacion-proyectos.component';

describe('BarraNavegacionProyectosComponent', () => {
  let component: BarraNavegacionProyectosComponent;
  let fixture: ComponentFixture<BarraNavegacionProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraNavegacionProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraNavegacionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
