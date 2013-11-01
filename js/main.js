var app = angular.module('myApp', []);

app.controller('AppCtrl', function($scope, $log) {
	$log.log("initializing AppCtrl");
	$scope.items = [
		{ expiresIn: '15 min', name: 'name', highestBid: '25.00', highestBidder: 'Rudy', myBid: '10.00' },
		{ expiresIn: '16 min', name: 'name', highestBid: '20.00', highestBidder: 'Rudy', myBid: '10.00' },
		{ expiresIn: '17 min', name: 'name', highestBid: '28.00', highestBidder: 'Rudy', myBid: '10.00' },
		{ expiresIn: '18 min', name: 'name', highestBid: '25.25', highestBidder: 'Rudy', myBid: '10.00' }
	];
});
	