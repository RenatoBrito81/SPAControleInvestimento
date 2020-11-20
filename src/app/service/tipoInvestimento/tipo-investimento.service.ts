import { Injectable } from '@angular/core';
import { TipoInvestimento } from 'src/app/model/tipoInvestimento';

@Injectable({
  providedIn: 'root'
})
export class TipoInvestimentoService {

  private dadosTipoInvestimento: TipoInvestimento[] = [
    { id: 1, tipoInvestimento: "Poupança", ativo: true },
    { id: 2, tipoInvestimento: "CDB", ativo: true }
  ];

  constructor() { }

  getAllTipoInvestimento(): TipoInvestimento[] {
    return this.dadosTipoInvestimento;
  }

  getTipoInvestimentoById(posicao: number): TipoInvestimento {
    var consulta = this.dadosTipoInvestimento.filter((inv) => {
      if(inv.id === posicao){
        return inv;
      }
    });
    return consulta[0];
  }

  updateTipoInvestimentoById(posicao: number, tipoInvestimento: TipoInvestimento) {
    var item = this.dadosTipoInvestimento.find((inv) => {
      if(inv.id === posicao){
        return inv;
      }
    });

    var index = this.dadosTipoInvestimento.indexOf(item);
    this.dadosTipoInvestimento[index] = tipoInvestimento;
  }

  checkTipoInvestimento(tipoInvestimento: string): boolean {
    var consulta = this.dadosTipoInvestimento.find((inv) => {
      if(inv.tipoInvestimento === tipoInvestimento){
        return inv;
      }
    });
    if(consulta === undefined){
      return true;
    }
    else{
      return false;
    }
  }

  getMaxIndex(): number {
    var index = Math.max.apply(Math, this.dadosTipoInvestimento.map( inv => inv.id));
    index++;
    return index;
  }

  insertTipoInvestimento(tipoInvestimento: string, ativo: string) {
    var novoRegistro: TipoInvestimento = new TipoInvestimento();
    novoRegistro.id = this.getMaxIndex();
    novoRegistro.tipoInvestimento = tipoInvestimento;
    novoRegistro.ativo = ativo === 'sim' ? true : false;
    this.dadosTipoInvestimento.push(novoRegistro);
  }

  getTipoInvestimentoAtivo(): string[] {
    return this.dadosTipoInvestimento.filter((inv) => {
      if(inv.ativo){
        return inv;
      }
    }).map((tp) => tp.tipoInvestimento);
  }
}
