/// <reference path="../rxjs/ts/rx.all.d.ts" />

var source$ = Rx.Observable.interval(500).take(10);
/**
 * source$-> -----0-----1-----2-----3-----4------5-----...-----9|
 */

source$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
