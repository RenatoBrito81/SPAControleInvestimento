import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogMessage } from 'src/app/model/dialogMessage';

@Component({
  selector: 'spa-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {

  tituloMensagemErro: string;
  mensagemErro: string;
  nomeBotao: string;

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: DialogMessage) { }

  ngOnInit(): void {
    this.tituloMensagemErro = this.dialog.titulo;
    this.mensagemErro = this.dialog.mensagem;
    this.nomeBotao = this.dialog.botao;
  }

}
