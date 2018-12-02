import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  couter_down = 1; // this used property is must be public
  private subscription: Subscription;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    const couter_time = this.couter_down;
    const period = 1000 * 0.1;
    this.subscription = interval(period).pipe(
      takeWhile(x => x <= couter_time),
      map(x => couter_time - x)
    ).subscribe(
      x => this.couter_down = x,
      null,
      () => this.router.navigateByUrl('')
    );

  }

  ngOnDestroy(): void {
    this.router.ngOnDestroy();
    this.subscription.unsubscribe();
  }

}
