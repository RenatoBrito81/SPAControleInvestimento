import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investimento } from 'src/app/model/investimento';
import { InvestimentoService } from 'src/app/service/investimento/investimento.service';

@Component({
  selector: 'spa-listar-investimento',
  templateUrl: './listar-investimento.component.html',
  styleUrls: ['./listar-investimento.component.css']
})
export class ListarInvestimentoComponent implements OnInit {

  dadosInvestimento: Investimento[] = [];

  colunasTabela: string[] = ['Id', 'TipoDeInvestimento', 'Valor', 'Data', 'Opções'];

  constructor(private investimentoService: InvestimentoService,
              private router: Router) { }

  ngOnInit(): void {
    this.dadosInvestimento = this.investimentoService.getAllInvestimento();
  }

  delete(posicao: number) {
    this.investimentoService.deleteInvestimentoById(posicao);
    this.router.navigateByUrl('/home');
  }

}
