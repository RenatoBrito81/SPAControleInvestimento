import { Injectable } from '@angular/core';
import { Investimento } from 'src/app/model/investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  private dadosInvestimento: Investimento[] = [
    {id: 1, tipoInvestimento: 'Poupança', valor: 100, data: new Date('11/12/2020')},
    {id: 2, tipoInvestimento: 'CDB', valor: 50, data: new Date('11/15/2020')}
  ];

  constructor() { }

  getAllInvestimento(): Investimento[] {
    return this.dadosInvestimento;
  }

  deleteInvestimentoById(posicao: number) {
    var item = this.dadosInvestimento.find((inv) => {
      if(inv.id === posicao){
        return inv;
      }
    });

    var index = this.dadosInvestimento.indexOf(item);
    this.dadosInvestimento.splice(index, 1);
  }
}
