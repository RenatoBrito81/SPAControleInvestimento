import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoInvestimento } from 'src/app/model/tipoInvestimento';
import { TipoInvestimentoService } from 'src/app/service/tipoInvestimento/tipo-investimento.service';

@Component({
  selector: 'spa-alterar-tipo-investimento',
  templateUrl: './alterar-tipo-investimento.component.html',
  styleUrls: ['./alterar-tipo-investimento.component.css']
})
export class AlterarTipoInvestimentoComponent implements OnInit {

  dadosTipoInvestimento: TipoInvestimento;
  idTipoInvestimento: number;
  status: string = "sim";

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private tipoInvestimentoService: TipoInvestimentoService) { }

  ngOnInit(): void {
    this.idTipoInvestimento = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id =", this.idTipoInvestimento);

    if(this.idTipoInvestimento > 0){
      this.dadosTipoInvestimento = this.tipoInvestimentoService.getTipoInvestimentoById(this.idTipoInvestimento);
      this.status = this.dadosTipoInvestimento.ativo ? 'sim' : 'nao';
    }
  }

  salvar(): void {
    this.dadosTipoInvestimento.ativo = this.status === 'sim' ? true : false;
    this.tipoInvestimentoService.updateTipoInvestimentoById(this.idTipoInvestimento, this.dadosTipoInvestimento);
    this.router.navigateByUrl('/listarTipoInvestimento');
  }

}
