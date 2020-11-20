import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Investimento } from 'src/app/model/investimento';
import { InvestimentoService } from 'src/app/service/investimento/investimento.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosInvestimento: Investimento[] = [];

  displayedColumns: string[] = ['id', 'tipoInvestimento', 'data', 'valor'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private investimentoService: InvestimentoService) { }

  ngOnInit(): void {
    this.dadosInvestimento = this.investimentoService.getAllInvestimento();
    this.dataSource = new MatTableDataSource(this.dadosInvestimento);
  }

  getTotalInvestimento(): number {
    return this.investimentoService.getTotalInvestimento();
  }

}
