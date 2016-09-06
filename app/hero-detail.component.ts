import {Component,OnInit,OnDestroy,Input} from '@angular/core';
import {Hero} from './model/Hero';
import {HeroService} from './hero.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector:'my-hero-detail',
	template:`
		  
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
  @Input()
  private hero: Hero;

  constructor( private route: ActivatedRoute,
  private router: Router,
  private service: HeroService){
  }

  OnInit(){
    this.sub = this.route.params.subscribe(params =>  {
      let id = +this.route.snapshot.params['id'];
      this.hero = new Hero(12,'urixin');
    });
  }

  gotoHeroes(){
    this.router.navigate(['/heroes']);
  }
  OnDestroy(){
    this.sub.unsubscribe();
  }
}