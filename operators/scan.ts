var source$ = Rx.Observable.of('h', 'e', 'l', 'l', 'o')
    .zip(Rx.Observable.interval(300).take(5), (s1, s2) => s1);

/**
 * source$-> -----h-----e----------l-----------l--------...-----9|
 * scan()         h     h+e        he+l        hel+l
 * output$-> -----h-----he---------hel---------hell-----...-----18|
 */

var output$ = source$.scan((acc, next) => acc + next.toString(), '');

output$.subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('Done')
);
