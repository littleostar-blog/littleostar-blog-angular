import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  tip_content = 'page not found';
  // couter_down = 2; // this used property is must be public
  private subscription: Subscription;

  constructor(
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.router.ngOnDestroy();
    this.tip_content = null;
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
