import should from 'should';
import Car from '../src/car';
import Lot from '../src/lot';
import Ticket from '../src/ticket';

var car;

beforeEach(function () {
	car = new Car();
});

describe("Lot park car", function () {

	it("when has vacancy can park car", function () {
		var lot = new Lot(1);
		var ticket = lot.park(car);
		ticket.should.be.ok;
	});

	it("when there is no vacancy can't park car", function () {
		var lot = new Lot(1);
		lot.park(car);
		var ticket = lot.park(new Car());
		should(ticket).be.exactly(null);
	});
});

describe("Lot fetch car", function () {

	it("can get car with correct ticket", function () {
		var lot = new Lot(1);
		var ticket = lot.park(car);
		lot.fetchCar(ticket).should.be.exactly(car);
	});

	it("can't get car with incorrect ticket", function () {
		var ticket = new Ticket();
		should(new Lot(1).fetchCar(ticket)).be.exactly(null);
	});

	it("can't get car with correct ticket twice", function () {
		var lot = new Lot(1);
		var ticket = lot.park(car);
		lot.fetchCar(ticket);
		should(lot.fetchCar(ticket)).be.exactly(null);
	});
})
