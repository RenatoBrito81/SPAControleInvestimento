import { Injectable } from '@angular/core';
import { Investimento } from 'src/app/model/investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  private dadosInvestimento: Investimento[] = [
    {id: 1, tipoInvestimento: 'Poupança', valor: 100, data: new Date('2020/11/12')},
    {id: 2, tipoInvestimento: 'CDB', valor: 50, data: new Date('2020/11/15')}
  ];

  constructor() { }

  getAllInvestimento(): Investimento[] {
    return this.dadosInvestimento;
  }

  getInvestimentoById(posicao: number): Investimento {
    var consulta = this.dadosInvestimento.filter((inv) => {
      if(inv.id === posicao){
        return inv;
      }
    });
    return consulta[0];
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

  updateInvestimento(tipoInvestimento: Investimento) {
    var item = this.dadosInvestimento.find((inv) => {
      if(inv.id === tipoInvestimento.id){
        return inv;
      }
    });

    var index = this.dadosInvestimento.indexOf(item);
    this.dadosInvestimento[index] = tipoInvestimento;
  }

  getMaxIndex(): number {
    var index = Math.max.apply(Math, this.dadosInvestimento.map( inv => inv.id));
    index++;
    return index;
  }

  insertInvestimento(investimento: Investimento) {
    var novoRegistro: Investimento = new Investimento();
    novoRegistro.id = this.getMaxIndex();
    novoRegistro.tipoInvestimento = investimento.tipoInvestimento;
    novoRegistro.valor = investimento.valor;
    novoRegistro.data = investimento.data;
    this.dadosInvestimento.push(novoRegistro);
  }
}
