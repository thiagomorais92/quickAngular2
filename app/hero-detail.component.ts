import {Component,OnInit,OnDestroy} from '@angular/core';
import {Hero} from './model/Hero';
import {HeroService} from './hero.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector:'my-hero-detail',
	template:`
		  <p>Hero Blow Route</p>

      <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>  

  <p>
      <button (click)="gotoHeroes()">Back</button>
  </p>
	`,
  providers:[HeroService]
})

export class HeroDetailComponent{
	
  private sub: Subscription;
  private hero: Hero;

  constructor( private route: ActivatedRoute,
  private router: Router,
  private service: HeroService){
  }

  OnInit(){
    this.sub = this.route.params.subscribe(params =>  {
      let id = +this.route.snapshot.params['id'];
      this.hero = this.service.getHero(id);
    });
  }

  gotoHeroes(){
    this.router.navigate(['/heroes']);
  }
  OnDestroy(){
    this.sub.unsubscribe();
  }
}