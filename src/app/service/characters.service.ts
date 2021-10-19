import { Champion } from './../shared/champion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly URL_BASE = 'https://api.genshin.dev/'

  constructor(private httpClient:HttpClient) { }

  getCharacters(){
    return this.httpClient.get<Array<any>>(this.URL_BASE+'characters');
  }

  findCharacters(champ:string){
    return this.httpClient.get<Champion>(this.URL_BASE+'characters/'+champ);
  }
  findImgCharacters(champ:string){
    return this.httpClient.get(this.URL_BASE+'characters/'+champ+'/card', { responseType: 'blob' });
  }
}
