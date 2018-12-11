import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  content = 'page not found';
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => this.titleService.setTitle(paramMap.get('title')));
  }

  ngOnDestroy(): void {
    this.router.ngOnDestroy();
    this.content = null;
    // this.couter_down = null;
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // const couter_num = this.couter_down;
    const couter_num = 0;
    const period_time = 300;
    this.subscription = timer(0, period_time).pipe(
      take(couter_num + 1),
      map(x => couter_num - x)
    ).subscribe(
      null,
      null,
      () => this.router.navigateByUrl('')
    );

  }

}
