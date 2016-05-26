/// <reference path="../rxjs/ts/rx.d.ts" />

var foo = Rx.Observable.of(1, 2, 3, 4, 5);

foo.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);

