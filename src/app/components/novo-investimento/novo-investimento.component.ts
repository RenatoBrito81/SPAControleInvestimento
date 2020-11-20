import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { Investimento } from 'src/app/model/investimento';
import { InvestimentoService } from 'src/app/service/investimento/investimento.service';
import { TipoInvestimentoService } from 'src/app/service/tipoInvestimento/tipo-investimento.service';

@Component({
  selector: 'spa-novo-investimento',
  templateUrl: './novo-investimento.component.html',
  styleUrls: ['./novo-investimento.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ]
})
export class NovoInvestimentoComponent implements OnInit {

  dadosInvestimento: Investimento;
  tipoInvestimentoAtivo: string[];

  invValor = new FormControl('', [Validators.required]);

  constructor(private investimentoService: InvestimentoService,
              private tipoInvestimentoService: TipoInvestimentoService,
              private router: Router,
              private dtAdapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.tipoInvestimentoAtivo = this.tipoInvestimentoService.getTipoInvestimentoAtivo();
    this.dadosInvestimento = new Investimento();
    this.dadosInvestimento.tipoInvestimento = this.tipoInvestimentoAtivo[0];
    this.dadosInvestimento.data = new Date();

    this.dtAdapter.setLocale('pt');
  }

  salvar(): void {
    console.log("dados =", this.dadosInvestimento);
    this.investimentoService.insertInvestimento(this.dadosInvestimento);
    this.router.navigateByUrl('/listarInvestimento');
  }

}
