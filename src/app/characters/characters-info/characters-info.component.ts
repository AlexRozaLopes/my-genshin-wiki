import { Champion } from './../../shared/champion';
import { CharactersService } from './../../service/characters.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-info',
  templateUrl: './characters-info.component.html',
  styleUrls: ['./characters-info.component.css']
})
export class CharactersInfoComponent implements OnInit {

  @Input()
  showDetails:boolean = true
  @Input() champ:string = ''
  champion:Array<Champion> = []
  imgChampion:any

  constructor(private charactersService:CharactersService) { }


  ngOnInit(): void {
    this.charactersService.findCharacters(this.champ).subscribe(dados => this.champion.push(dados))
    console.log(this.champion)
    this.getImageFromService()
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imgChampion = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getImageFromService() {
  this.charactersService.findImgCharacters(this.champ).subscribe(data => {
    this.createImageFromBlob(data);
  }, error => {
    console.log(error);
  });
}

}
