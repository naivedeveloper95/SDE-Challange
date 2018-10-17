import { quickStrategy } from './strategy';

class ParkingDelegator {
	constructor() {
		this.strategy = quickStrategy;
	}
	setStrategy(strategy) {
		this.strategy = strategy;
		return this;
	}
	park(car) {
		var parkContainer = this.strategy.whereToPark(this.parkContainers());
		if (parkContainer) {
			return parkContainer.park(car);
		}
		return null;
	}
	fetchCar(ticket) {
		var car;
		for (var i = 0; i < this.parkContainers().length; i++) {
			car = this.parkContainers()[i].fetchCar(ticket);
			if (car) {
				return car;
			}
		}
		return null;
	}
}

ParkingDelegator.prototype.constructor = ParkingDelegator;

export default ParkingDelegator;