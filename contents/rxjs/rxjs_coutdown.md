
---

- stackoverflow
  - https://stackoverflow.com/questions/51072691/rxjs6-timer-not-being-triggered-in-angular-6-subscription-to-observable-timer-pl
    - ```typescript
      const startTime = 3;
      timer(0, 1000).pipe(
        takeWhile(t => t < startTime),
        map(t => startTime - t)
      ).subscribe(
        t => console.log(t), 
        null, 
        () => console.log('Done!')
      );
      // output: 3 2 1 0
      ```

- https://reactive.how/countdown
  - interval ⇢ map ⇢ take ⇢ startWith

---

end