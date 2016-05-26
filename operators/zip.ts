/// <reference path="../rxjs/ts/rx.all.d.ts" />

var source$ = Rx.Observable.interval(300).take(5);
    //.do(val => console.log('interval event from sourse 1; val = ' + val));
var source2$ = Rx.Observable.interval(600).take(5);
    //.do(val => console.log('interval event from sourse 2; val = ' + val));

/**
 * source$->  -----0-------1--------2--------3-----...-----9|
 * source2$-> ---0-------1-------2--------3-----...-----18|
 * zip()
 * output$->  -----0-------2--------4--------6-----...-----18|
 */
var output$ = Rx.Observable.zip(source$, source2$, (s1, s2) => s1 + s2).map(v => v.toString());
output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
