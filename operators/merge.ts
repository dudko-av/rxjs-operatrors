/// <reference path="../rxjs/ts/rx.all.d.ts" />


var source$ = Rx.Observable.interval(500).take(5);
var source2$ = Rx.Observable.interval(300).take(5);

/**
 * source$->  -----0-----1-----2-----3-----...-----|
 * source2$-> ---0---1---2---3---4---5-----...-----|
 * output$->  ---0-0-1---12--3-2-4---35-----...-----|
 */

// var output$ = Rx.Observable.merge(source$, source2$);
// OR
var output$ = source$.merge(source2$);

output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
