import Car from '../src/car';
import Lot from '../src/lot';
import ParkingBoy from '../src/parkingBoy';
import { vacancyStrategy as _vacancyStrategy } from '../src/strategy';
import Should from 'should';

describe("smart parking boy", function () {
	it("can park car in highest vacancy lot", function () {
		var lowVacancyLot = new Lot(5);
		var highVacancyLot = new Lot(10);
		highVacancyLot.park(new Car());

		var vacancyStrategy = _vacancyStrategy;
		var smartParkingBoy = new ParkingBoy().setStrategy(vacancyStrategy).addLot(lowVacancyLot).addLot(highVacancyLot);
		var car = new Car();
		var ticket = smartParkingBoy.park(car);
		Should(lowVacancyLot.fetchCar(ticket)).be.exactly(null);
		highVacancyLot.fetchCar(ticket).should.be.exactly(car);
	})
})