import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ListarTipoInvestimentoComponent } from './components/listar-tipo-investimento/listar-tipo-investimento.component';
import { AlterarTipoInvestimentoComponent } from './components/alterar-tipo-investimento/alterar-tipo-investimento.component';
import { NovoTipoInvestimentoComponent } from './components/novo-tipo-investimento/novo-tipo-investimento.component';
import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';
import { ListarInvestimentoComponent } from './components/listar-investimento/listar-investimento.component';
import { AlterarInvestimentoComponent } from './components/alterar-investimento/alterar-investimento.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NovoInvestimentoComponent } from './components/novo-investimento/novo-investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListarTipoInvestimentoComponent,
    AlterarTipoInvestimentoComponent,
    NovoTipoInvestimentoComponent,
    DialogMessageComponent,
    ListarInvestimentoComponent,
    AlterarInvestimentoComponent,
    NovoInvestimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
