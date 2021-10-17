import { GenshinDadosService } from './../service/genshin-dados.service';
import { Component, OnInit } from '@angular/core';
import { DadosPrincipais } from '../shared/dados-principais';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  dadosPrincipais: Array<DadosPrincipais> = []

  constructor(private genshinDadosService: GenshinDadosService) { }

  ngOnInit(): void {
    this.genshinDadosService.getDadosPrincipais().subscribe(dados => this.dadosPrincipais.push(...dados.types))
    console.log("oi")
  }

}
