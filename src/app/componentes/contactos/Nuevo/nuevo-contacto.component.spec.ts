import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoContactoComponent } from './nuevo-contacto.component';

describe('NuevoContactoComponent', () => {
  let component: NuevoContactoComponent;
  let fixture: ComponentFixture<NuevoContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
