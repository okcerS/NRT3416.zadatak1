let math = require("mathjs");

function saberi(x,y){
	return math.add(x,y);
}

function oduzmi(x,y){
	return math.subtract(x,y);
}

function pomnozi(x,y){
	return math.multiply(x,y);
}

function podeli(x,y){
	if (y==0){
		return "ERROR! Ne može se deliti sa nulom."
	}
	else{
		return math.divide(x,y);
	}
}

function korenuj(x){
	return math.sqrt(x);
}

function stepenuj(x,y){
	return math.pow(x,y);
}

console.log(saberi(16,2));
console.log(oduzmi(16,2));
console.log(pomnozi(16,2));
console.log(podeli(16,2));
console.log(korenuj(16));
console.log(stepenuj(16,2));