import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarTipoInvestimentoComponent } from './alterar-tipo-investimento.component';

describe('AlterarTipoInvestimentoComponent', () => {
  let component: AlterarTipoInvestimentoComponent;
  let fixture: ComponentFixture<AlterarTipoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarTipoInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarTipoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
