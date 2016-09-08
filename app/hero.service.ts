import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from './model/Hero';



@Injectable()
export class HeroService  {
	
	private hero:Hero;

	getHeroes(){
		return  Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
    	setTimeout(() => resolve(HEROES), 4000)); // 4 seconds 
	}

	getHero(heroId: number | string) {
	  	let hero:Hero;
		for (var i = 0; i< HEROES.length; ++i) {
			if(HEROES[i].id == heroId){
				this.hero = HEROES[i];
			}
		}
		
		return Promise.resolve(this.hero);
	}
}