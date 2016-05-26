/// <reference path="../rxjs/ts/rx.all.d.ts" />


var source$ = Rx.Observable.of('h', 'e', 'l', 'l', 'o')
    .zip(Rx.Observable.interval(300).take(5), (s1, s2) => s1);

/**
 * source$-> -----h-----e-----l-----l-----...-----|
 * output$-> -----------h,e----------l,l-----...-----|
 */

var output$ = source$.bufferCount(2);

output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
