import Ticket from "./ticket";

class Lot {
	constructor(capability) {
		this._capability = capability || 0;
		this._restCapability = capability;
		this._cars = [];
		this._tickets = [];
	}
	restCapability() {
		return this._restCapability;
	}
	capability() {
		return this._capability;
	}
	park(car) {
		if (this._restCapability > 0) {
			this._restCapability--;
			this._cars.push(car);
			var ticket = new Ticket();
			ticket._fromWhere = this;
			this._tickets.push(ticket);
			return ticket;
		}
		return null;
	}
	fetchCar(ticket) {
		this._capability++;
		var carIndex = this._tickets.indexOf(ticket);
		if (carIndex != -1) {
			this._tickets.splice(carIndex, 1);
			return this._cars.splice(carIndex, 1)[0];
		}
		return null;
	}
}

Lot.prototype.constructor = Lot;





export default Lot;