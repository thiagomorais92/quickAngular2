import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from './model/Hero';



@Injectable()
export class HeroService  {
	

	getHeroes(){
		return  Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
    	setTimeout(() => resolve(HEROES), 4000)); // 4 seconds 
	}

	  getHero(id: number | string) {
	return new Hero(1,'huadhausdh');
  }
}