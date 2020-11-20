import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarInvestimentoComponent } from './alterar-investimento.component';

describe('AlterarInvestimentoComponent', () => {
  let component: AlterarInvestimentoComponent;
  let fixture: ComponentFixture<AlterarInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
