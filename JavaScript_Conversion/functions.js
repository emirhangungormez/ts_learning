function getAvarage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result: ' + result;
}
getAvarage(10, 20, 30);
getAvarage(10, 20); // c? sayesinde fonksiyon ucuncu parametreyi almak zorunda degildir
var getAvarage2 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total + a[i];
        count++;
    }
    var result = total / count;
    return 'result: ' + result;
};
getAvarage2(10, 20, 30, 40, 50, 60);
