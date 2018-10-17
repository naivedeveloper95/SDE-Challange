import { apply, prototype } from './parkingDelegator';

class ParkingManager {
	constructor() {
		apply(this, arguments);
		this.parkStuffs = [];
	}
	parkContainers() {
		return this.parkStuffs;
	}
	addParkStuff(parkStuff) {
		this.parkStuffs.push(parkStuff);
		return this;
	}
}

ParkingManager.prototype = Object.create(prototype);
ParkingManager.prototype.constructor = ParkingManager;



export default ParkingManager;