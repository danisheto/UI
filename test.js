var test=function(){
	console.log($("#webpage").$(".navItem"))
	var start=Date.now();
	for(var i=0;i<1000000;i++){
		$("#webpage").$(".navItem")
	}
	var end=Date.now();
	console.log(end-start)
	var start=Date.now();
	for(var i=0;i<1000000;i++){
		document.getElementById("webpage").getElementsByClassName("navItem")
	}
	var end=Date.now();
	console.log(end-start)
}