/// <reference path="../rxjs/ts/rx.all.d.ts" />

var source$ = Rx.Observable.interval(500).take(5);

/**
 * source$-> -----0-----1-----2------3------4---...-----|
 * output$-> -----------0-----1-----2------3------4---...-----|
 */

var output$ = source$.delay(1000);

output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
