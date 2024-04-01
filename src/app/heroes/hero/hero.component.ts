import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public userName: string = "ironman";
  public age: number = 45;

  get capitalizeName():string{
    return this.userName.toUpperCase();
  }
getHeroesDescription(): string {
return`${this.userName} - ${this.age}`;
}

changeHero():void{
this.userName = 'Spiderman'

}

changeAge():void {
this.age=25

}

resetForm():void{
  this.userName = 'ironman';
  this.age = 45;

  //document.querySelectorAll('h1')!.forEach ( element => {
    //element.innerHTML = '<h1> Desde Angular </h1>';
  //});
}



}
