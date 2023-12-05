var car = {
	make: 'VW',
	type: 'polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1','seat 2','seat 3','seat 4'],
	turnOn : function() {
		this.isTurnedOn = true;
	},
	fly: function(){
		alert('fly');
	}
}

var doCoolStuff = function(){
	var currClassName = document.getElementById('cool').className

	if (currClassName == 'cool') {
		document.getElementById('cool').className = 'cool red'
	} else{
		document.getElementById('cool').className = 'cool'
	}
}