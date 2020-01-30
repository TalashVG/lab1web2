var arr = [];
for(var i = 0; i < 5; i++){
	var input = prompt("Enter your number: ", "");
	arr.push(input);
}

arr.forEach(elem => console.log(elem));