import {Component, Input} from '@angular/core';
import { Hero} from './model/Hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
	selector:'hero-list',
	template:`
		  <h2>My Heroes</h2>


<label>Hero name:</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>

<ul class="heroes">
  <li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>

</ul>
  <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail> -->
	`,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [HeroService],
})

export class HeroListComponent implements OnInit{
	

  constructor(private router:Router,private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    
  }

  selectedHero: Hero;
  title = 'Tour of Heroes';
  hero:Hero = new Hero(1,'Windstorm');
  heroes = [];
  
   onSelect(hero:Hero){
    //this.selectedHero = hero;
    this.router.navigate(['/hero', hero.id]);
  }
 
  getHeroes(){
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}
}