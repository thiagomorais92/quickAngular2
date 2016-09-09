import { Component,OnInit } from '@angular/core';
import { Hero } from '../model/Hero';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
	selector:'hero-dashboard',
	templateUrl:'./app/dashboardComponent/template/dashboard.component.html',
	styleUrls:['./app/dashboardComponent/styles/dashboard.component.css'],
	providers:[HeroService]
})

export class DashboardComponent implements OnInit {
	
	private heroes = [];
	
	constructor(private router:Router, private service:HeroService) {
		
	}

	ngOnInit(){
		this.getHeroes();
	}

	gotoDetail(hero:Hero){
		let link  = ['/hero',hero.id];
		this.router.navigate(link);
	}


	getHeroes(){
	   this.service.getHeroes().then(heroes => {this.heroes = heroes.slice(1, 5)});
 	}
}