function getResults() {

	var a = parseInt(document.getElementById("aValue").value);
	var b = parseInt(document.getElementById("bValue").value);
	var c = parseInt(document.getElementById("cValue").value);

	if(a == b && b == c) {
		document.getElementById('answer').value = 'An Equilateral: An equilateral triangle is a triangle with three equal sides'
	}
	else if (a == b || a == c || b == c){
		document.getElementById('answer').value = 'An Isoceles : An Isoceles triangle is a triangle with two equal sides and the third side is different'
	}
	else if (a != b != c) {
		//console.log(a+b)
		if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
		document.getElementById('answer').value = 'Not a Triangle'
	} 
	else {
		document.getElementById('answer').value = 'A Scalene : A scalene triangle doesn\'t have any equal side, all the sides are different from one another'
	}
}
	
}
function reset()  {
	document.getElementById("aValue").value = '';
	document.getElementById("bValue").value = '';
	document.getElementById("cValue").value = '';
	document.getElementById('answer').value = '';
}  