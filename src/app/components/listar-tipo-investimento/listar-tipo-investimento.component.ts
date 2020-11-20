import { Component, OnInit } from '@angular/core';
import { TipoInvestimento } from 'src/app/model/tipoInvestimento';
import { TipoInvestimentoService } from 'src/app/service/tipoInvestimento/tipo-investimento.service';

@Component({
  selector: 'spa-listar-tipo-investimento',
  templateUrl: './listar-tipo-investimento.component.html',
  styleUrls: ['./listar-tipo-investimento.component.css']
})
export class ListarTipoInvestimentoComponent implements OnInit {

  dadosTipoInvestimento: TipoInvestimento[] = [];

  colunasTabela: string[] = ['Id', 'TipoDeInvestimento', 'Ativo', 'Opções'];

  constructor(private tipoInvestimentoService: TipoInvestimentoService) { }

  ngOnInit(): void {
    this.dadosTipoInvestimento = this.tipoInvestimentoService.getAllTipoInvestimento();
  }

}
