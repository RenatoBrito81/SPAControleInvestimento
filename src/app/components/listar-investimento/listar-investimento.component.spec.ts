import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInvestimentoComponent } from './listar-investimento.component';

describe('ListarInvestimentoComponent', () => {
  let component: ListarInvestimentoComponent;
  let fixture: ComponentFixture<ListarInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
