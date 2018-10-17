import { apply, prototype } from './parkingDelegator';

class ParkingBoy {
	constructor() {
		apply(this, arguments);
		this.lots = [];
	}
	parkContainers() {
		return this.lots;
	}
	addLot(lot) {
		this.lots.push(lot);
		return this;
	}
	restCapability() {
		return this.parkContainers().reduce(function (previous, current) {
			return previous.restCapability() + current.restCapability();
		});
	}
	capability() {
		return this.parkContainers().reduce(function (previous, current) {
			return previous.capability() + current.capability;
		});
	}
}

ParkingBoy.prototype = Object.create(prototype);
ParkingBoy.prototype.constructor = ParkingBoy;

export default ParkingBoy;