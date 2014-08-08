var UI={};
//basic selectors
var $=function(selector){
	var selectorSub=selector.slice(1);
	var parent=this instanceof Element ? this : document;
	switch(selector[0]){
		//class selector
		case ".":
			return parent.getElementsByClassName(selectorSub);
		break;
		//id selector
		case "#":
			return parent.getElementById(selectorSub)
		break;
		//tag selector
		default:
			return parent.getElementsByTagName(selector)
	}
}
Element.prototype.$=$;
Element.prototype.equal = function (array, array2) {
    // if the other array is a falsy value, return
    if (!array || !array2)
        return false;

    // compare lengths - can save a lot of time 
    if (array2.length != array.length)
        return false;

    for (var i = 0, l=array2.length; i < l; i++) {
        // Check if we have nested arrays
        if (array2[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!$.equals(array[i],array2[i]))
                return false;       
        }           
        else if (array2[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}


        //direct descendant    Array.prototype.slice.call($("#sidebar").children).filter(function(value, index, array){return value.classList.contains("active")})[0].classList.remove("active")
