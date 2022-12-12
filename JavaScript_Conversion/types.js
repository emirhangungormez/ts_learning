// let number = 9;
// number = 'e';
// TypeScirpt'te int atamasindan sonra str atamasi hata verir.
// Fakat JavaScript'te int atamasinda sonra str atamasi herhangi bir hata vermez.
var a = 9;
var b = 'm';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 5, false]; // tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; // 0
var havale = Payment.havale; // 1
var eft = Payment.eft; // 2
