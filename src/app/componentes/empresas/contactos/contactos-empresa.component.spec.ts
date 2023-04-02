import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosEmpresaComponent } from './contactos-empresa.component';

describe('ContactosEmpresaComponent', () => {
  let component: ContactosEmpresaComponent;
  let fixture: ComponentFixture<ContactosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
