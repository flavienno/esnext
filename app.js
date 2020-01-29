
let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
// citiesId = []
citiesId.push("tokyo")
console.log(citiesId)


//Création d’objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
const weather = getWeather(favoriteCityId)
console.log(weather)

//Affectation destructurée
const city = weather.city
const temperature = weather.temperature
console.log(city)
console.log(temperature)

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

//classe
class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get price() {
        return this._price;
    }

    toString() {
        return 'Trip [' + this.id + ' , ' + this.name + ' , ' + this.imageUrl + ' ,' + this.price + ']';
    }
    static getDefaultTrip() {
        const defaultTrip = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        return defaultTrip;
    }
}


let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());
console.log(Trip.getDefaultTrip().toString());

//Heritage
class FreeTrip extends Trip{
    constructor(id, name, imageUrl,price){
        super(id, name, imageUrl);
        this.price=price;
    }
    toString(){
        return 'Free'+ super.toString();
    }
}

let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
freeTrip.price=0;
console.log(freeTrip.toString());
