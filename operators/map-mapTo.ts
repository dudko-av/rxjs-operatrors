/// <reference path="../rxjs/ts/rx.all.d.ts" />

var source$ = Rx.Observable.interval(500).take(10);
/**
 * source$-> -----0-----1-----2-----3-----4------5-----...-----9|
 * map()          *2    *2    *2    *2    *2     *2
 * output$-> -----0-----2-----2-----6-----8------10-----...-----18|
 */

var map$ = source$.map(val => val * 2);

map$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
