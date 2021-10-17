import { CharactersService } from './../service/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:Array<any> = []

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(dados => this.characters.push(...dados))
    console.log(this.characters)
  }

}
