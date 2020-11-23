import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

import { HeroService } from '../heroes/service/hero.service';
import { MessageService } from '../messages/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getHeroes();
  }

}
