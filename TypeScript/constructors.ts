interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    travelTo(point): void {
        console.log(`Taksi x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point): void {
        console.log(`Otobüs x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi; // obje olusturumali
taxi_1.travelTo({x:1, y:2});
taxi_1.currentLocation = {x: 2, y: 5};

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi; // obje olusturumali
taxi_2.travelTo({x:7, y:9});
taxi_2.currentLocation = {x: 8, y: 3};

let bus_1 = new Bus; // obje olusturumali
bus_1.travelTo({x:14, y:25});
bus_1.currentLocation = {x: 4, y: 3};