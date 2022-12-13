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