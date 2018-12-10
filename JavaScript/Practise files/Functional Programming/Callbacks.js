function greet(callback){
	console.log("Hello!");
	var data = {
		name: "THS"
	};

	callback(data);
}
greet(function(data){
	console.log("The Callback is invoked!");
	console.log(data);
});

greet(function(data){
	console.log("The Callback is invoked Again!");
	console.log(data.name);
});