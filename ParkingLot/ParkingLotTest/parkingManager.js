import Car from '../src/car';
import Lot from '../src/lot';
import ParkingBoy from '../src/parkingBoy';
import { quickStrategy as _quickStrategy } from '../src/strategy';
import ParkingManager from '../src/parkingManager';

describe("parking manager", function () {
	it("can park car by parking boy and lot", function () {
		var disabledLot = new Lot(0);
		var enabledLot = new Lot(1);

		var standaloneLot = new Lot(10);
		var quickStrategy = _quickStrategy;
		var parkingBoy = new ParkingBoy().setStrategy(quickStrategy).addLot(disabledLot).addLot(enabledLot);

		var parkingManager = new ParkingManager().setStrategy(quickStrategy).addParkStuff(parkingBoy).addParkStuff(standaloneLot);
		var car1 = new Car();
		var car2 = new Car();
		var ticket = parkingManager.park(car1);
		enabledLot.fetchCar(ticket).should.be.exactly(car1);
		ticket = parkingManager.park(car2);
		standaloneLot.fetchCar(ticket).should.be.exactly(car2);
	});

});