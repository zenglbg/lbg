import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = HEROES;
  selectedHero?: Hero;
  constructor() {}

  ngOnInit(): void {}

  public onSelect(hero: Hero): void {
    console.log(hero, 'heroherohero')
    this.selectedHero = hero;
  }
}
