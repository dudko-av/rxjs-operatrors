/// <reference path="../rxjs/ts/rx.all.d.ts" />

var foo = Rx.Observable.interval(500);

foo.subscribe(val => console.log(val));