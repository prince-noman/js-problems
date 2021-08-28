//1. seerToMon

function seerToMon(seer){
	if(typeof seer == 'number'){
		const mon = seer/40;
	return mon;
	}else{
		const message = 'Please enter a number';
		return message;
	}
}

console.log(seerToMon(120));

// 2. totalSales

const singleShirtPirce = 100;
const singlePantPrice = 200;
const singleShoePrice = 500;

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
	if (shirtQuantity >0  ||  pantQuantity > 0 || shoeQuantity > 0){
	const shirtSales = singleShirtPirce * shirtQuantity;
	const pantSales = singlePantPrice * pantQuantity;
	const shoeSales = singleShoePrice * shoeQuantity;
	
	const sum = shirtSales + pantSales + shoeSales;
	return sum;
	}else{
		const message = 'Please add at lease one product';
		return message;
	}
}  

console.log(totalSales(1,1,2));


// 3. deliveryCost


function deliveryCost(quantity){
	const costWithn100Pices = 100;
	const costWithin200Pices = 80;
	const costAbove200Pices = 50;
	
	if(quantity <= 100){
		const totalCostWithin100Pices = costWithn100Pices * quantity;
		return totalCostWithin100Pices;
	}else if(quantity <= 200){
		const totalCostOf100Pices = 100 * costWithn100Pices;
		const restQunatity = quantity - 100;
		const totalCostWithin101To200Pices = costWithin200Pices * restQunatity;
		const totalCostWithin200 = totalCostOf100Pices + totalCostWithin101To200Pices;
		return totalCostWithin200;
	}else{
		const totalCostOf100Pices = 100 * costWithn100Pices;
		const totalCostOf200Pices = 100 * costWithin200Pices;
		const restQunatity = quantity - 200;
		const totalCostAbove200Pices = costAbove200Pices * restQunatity;
		const totalCost = totalCostOf100Pices + totalCostOf200Pices + totalCostAbove200Pices;
		return totalCost
	}
}
console.log(deliveryCost(300));


// 4.  perfectFriend

const friends = ['Abir','Rakib','Labu','Ratul', 'Boston'];


function perfectFriend(friends){
	var myFriend;
for(const friend of friends){
	if(friend.length == 5){
		myFriend= friend;
		break;
		}
	}
	return myFriend;
}

console.log(perfectFriend(friends));

