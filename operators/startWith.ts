/// <reference path="../rxjs/ts/rx.all.d.ts" />

var source$ =  Rx.Observable.interval(300).take(5);

/**
 * source$-> ------0-----1-----2-----3-----...-----9|
 * output$-> a-----0-----2-----2-----6-----...-----18|
 */

var output$ = source$.startWith('a');

output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
