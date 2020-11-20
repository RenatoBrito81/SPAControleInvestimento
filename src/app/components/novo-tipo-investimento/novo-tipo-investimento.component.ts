import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TipoInvestimentoService } from 'src/app/service/tipoInvestimento/tipo-investimento.service';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Component({
  selector: 'spa-novo-tipo-investimento',
  templateUrl: './novo-tipo-investimento.component.html',
  styleUrls: ['./novo-tipo-investimento.component.css']
})
export class NovoTipoInvestimentoComponent implements OnInit {

  tipoInvestimento: string = '';
  ativo: string = 'sim';
  tipoInv = new FormControl('', [Validators.required]);

  constructor(private tipoInvestimentoService: TipoInvestimentoService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  salvar(): void {
    if(this.tipoInvestimentoService.checkTipoInvestimento(this.tipoInvestimento)){
      this.tipoInvestimentoService.insertTipoInvestimento(this.tipoInvestimento, this.ativo);
    }
    else{
      this.dialog.open(DialogMessageComponent, {
        data: {
          titulo: 'Alerta! ',
          mensagem: 'O Tipo de Investimento já está cadastrado.',
          botao: 'Fechar',
        }
      });
    }
  }

}