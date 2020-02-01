
let favoriteCityId = 'rome'
console.log(favoriteCityId)
favoriteCityId = 'paris'
console.log(favoriteCityId)
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
console.log(citiesId)
// citiesId = []
citiesId.push('tokyo')
console.log(citiesId)


//Création d’objet
function getWeather(cityId) {
    const city = cityId.toUpperCase();
    const temperature = 20;
    return { city, temperature };
}
const weather = getWeather(favoriteCityId)
console.log(weather)

//Affectation destructurée
//const {city,temperature}= weather; identique à :
const city = weather.city;
const temperature = weather.temperature;
console.log(city);
console.log(temperature);

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

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
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = price;
    }
    toString() {
        return 'Free' + super.toString();
    }
}

let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
freeTrip.price = 0;
console.log(freeTrip.toString());


//Promise, Set, Map, Arrow Function
class TripService {
    constructor() {

        // TODO Set of 3 trips         

        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                for (const Trip of this.trips) {
                    if (Trip.name === tripName) {
                        resolve(Trip)
                    }
                    else {
                        reject(`No trip found with name ${tripName}`)
                    }
                }

            }, 2000)
        });
    }
}
class PriceService {
    constructor() {
        // TODO Map of 2 trips 

        this.price = new Map();
        this.price.set('Paris', 100);
        this.price.set('rio-de-janeiro', 800);
        this.price.set('Nantes');

    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                
                    if (this.price.has (tripId)) {
                        resolve(this.price.get(tripId))
                    }
                    else {
                        reject(` No price found for id ${tripId}`)
                    }

                
            }, 2000)
        });
    }
}

let instTripService = new TripService();
let instPriceService = new PriceService();
instTripService.findByName('Paris').then(tripTrouve => console.log(`Trip trouvé : ${tripTrouve}`)).catch(err => console.log(err));
instTripService.findByName('Toulouse').then(tripTrouve => console.log(`Trip trouvé : ${tripTrouve}`)).catch(err => console.log(err));

instPriceService.findPriceByTripId('rio-de-janeiro').then(prixTrouve => console.log(`Prix trouvé : ${prixTrouve}`)).catch(err => console.log(err));
//instPriceService.findPriceByTripId('Nantes').then(prixTrouve => console.log(`Prix trouvé : ${prixTrouve}`)).catch(err => console.log(err));

instTripService.findByName('Nantes').then(tripTrouve => priceService.findPriceByTripId(tripTrouve.id)).then(prixTrouve => console.log(`le prix est de ${prixTrouve} €`))
    .catch(err => console.log(err));

    instTripService.findByName('Rio de Janeiro').then(tripTrouve => priceService.findPriceByTripId(tripTrouve.id)).then(prixTrouve => console.log(`le prix est de ${prixTrouve} €`))
    .catch(err => console.log(err));  