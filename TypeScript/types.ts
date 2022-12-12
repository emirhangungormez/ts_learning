// let number = 9;
// number = 'e';
// TypeScirpt'te int atamasindan sonra str atamasi hata verir.
// Fakat JavaScript'te int atamasinda sonra str atamasi herhangi bir hata vermez.

let a: number = 9;
let b: string = 'm';
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a', true];
let h: [string, number, boolean] = ['a', 5, false]; // tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=1, eft=2};

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let eft = Payment.eft; // 2