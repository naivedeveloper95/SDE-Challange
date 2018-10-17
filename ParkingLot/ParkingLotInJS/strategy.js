var strategy = {
	quickStrategy: {
		whereToPark: function (parkThings) {
			for (var i = 0; i < parkThings.length; i++) {
				var lot = parkThings[i];
				if (lot.restCapability() > 0) {
					return lot;
				}
			}
			return null;
		}
	},
	vacancyRateStrategy: {
		whereToPark: function (parkThings) {
			var rateArray = parkThings.map(function (parkThing) {
				var capability = parkThing.capability();
				var restCapability = parkThing.restCapability();
				if (capability == 0) {
					return 0;
				}
				return restCapability / capability;
			});
			var biggestRate = Math.max.apply(Math, rateArray);
			var index = rateArray.indexOf(biggestRate);
			return parkThings[index];
		}
	},

	vacancyStrategy: {
		whereToPark: function (parkThings) {
			var rateArray = parkThings.map(function (parkThing) {
				return parkThing.restCapability();
			});
			var biggestVacancy = Math.max.apply(Math, rateArray);
			var index = rateArray.indexOf(biggestVacancy);
			return parkThings[index];
		}

	}
}

export default strategy;
