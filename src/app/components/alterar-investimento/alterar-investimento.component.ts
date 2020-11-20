import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investimento } from 'src/app/model/investimento';
import { InvestimentoService } from 'src/app/service/investimento/investimento.service';
import { TipoInvestimentoService } from 'src/app/service/tipoInvestimento/tipo-investimento.service';

@Component({
  selector: 'spa-alterar-investimento',
  templateUrl: './alterar-investimento.component.html',
  styleUrls: ['./alterar-investimento.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ]
})
export class AlterarInvestimentoComponent implements OnInit {

  dadosInvestimento: Investimento;
  idTipoInvestimento: number;
  tipoInvestimentoAtivo: string[];

  invValor = new FormControl('', [Validators.required]);

  constructor(private activatedRoute: ActivatedRoute,
              private investimentoService: InvestimentoService,
              private tipoInvestimentoService : TipoInvestimentoService,
              private router: Router,
              private dtAdapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.idTipoInvestimento = +this.activatedRoute.snapshot.paramMap.get('id');

    this.dadosInvestimento = this.investimentoService.getInvestimentoById(this.idTipoInvestimento);
    this.tipoInvestimentoAtivo = this.tipoInvestimentoService.getTipoInvestimentoAtivo();

    this.dtAdapter.setLocale('pt');
  }

  salvar(): void {
    this.investimentoService.updateInvestimento(this.dadosInvestimento);
    this.router.navigateByUrl('/listarInvestimento');
  }

}
