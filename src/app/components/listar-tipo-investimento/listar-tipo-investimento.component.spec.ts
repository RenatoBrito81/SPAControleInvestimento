import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoInvestimentoComponent } from './listar-tipo-investimento.component';

describe('ListarTipoInvestimentoComponent', () => {
  let component: ListarTipoInvestimentoComponent;
  let fixture: ComponentFixture<ListarTipoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
