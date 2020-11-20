import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTipoInvestimentoComponent } from './novo-tipo-investimento.component';

describe('NovoTipoInvestimentoComponent', () => {
  let component: NovoTipoInvestimentoComponent;
  let fixture: ComponentFixture<NovoTipoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTipoInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTipoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
