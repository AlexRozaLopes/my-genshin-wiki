import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPrincipais } from '../shared/dados-principais';

@Injectable({
  providedIn: 'root'
})
export class GenshinDadosService {

  private URL_BASE = 'https://api.genshin.dev/'

  constructor(private httpClient: HttpClient) { }

  getDadosPrincipais(){
    return this.httpClient.get<DadosPrincipais>(this.URL_BASE);
  }
}
