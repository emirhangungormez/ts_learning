var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi, (x: ".concat(this._location.x, "; y: ").concat(this._location.y, ")'dan (x: ").concat(point.x, "; y: ").concat(point.y, ") konumuna gidiyor."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('Koordinat bilgileri negatif olamaz.');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });
var currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
