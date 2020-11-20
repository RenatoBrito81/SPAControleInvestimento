import { Injectable } from '@angular/core';
import { TipoInvestimento } from 'src/app/model/tipoInvestimento';

@Injectable({
  providedIn: 'root'
})
export class TipoInvestimentoService {

  dadosTipoInvestimento: TipoInvestimento[] = [
    { id: 1, tipoInvestimento: "Poupança", ativo: true },
    { id: 2, tipoInvestimento: "CDB", ativo: true }
  ];

  constructor() { }

  getAllTipoInvestimento(): TipoInvestimento[] {
    return this.dadosTipoInvestimento;
  }
}
