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

  insertTipoInvestimento(tipoInvestimento: string, ativo: string) {
    //
  }
}
