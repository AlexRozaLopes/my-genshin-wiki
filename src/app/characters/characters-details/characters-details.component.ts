import { CharactersService } from './../../service/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from 'src/app/shared/champion';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  public person:Array<Champion> = []

  constructor(private router: ActivatedRoute, private charactersService:CharactersService ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>
      this.charactersService.findCharacters(params['name']).subscribe(person =>
        this.person.push(person)))
        console.log(this.person)
  }

}
