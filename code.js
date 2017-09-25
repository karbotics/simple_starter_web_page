
/**
* code.js
* Simple_Starter_Web_Page
* 
* Created by Kar Beringer.
* Updated 24 Sepmtember 2017.
*
* This is where the JavaScript for index.html goes.
*/

// Tester Function
function test() {
    document.getElementById("test").innerHTML = "Hello World";
}

// Tester Function
function test2() {
    document.getElementById("test").innerHTML = decimalToBinary(5);
}

// This function executes when the user clicks the button. 
function test3() {
	var selectList = document.getElementById("inputList");
    var N = selectList.options[selectList.selectedIndex].value;
    document.getElementById("test").innerHTML = decimalToBinary(N);
}

/**
* Converts a decimal integer to its binary equivalent. 
* @param {Number} N Integer within range [0, 15] inclusive.
* @return {String} A sequence of binary digits in [0,1].
*/
function decimalToBinary(N) {
	var bitArray = [];
	if ((N <= 0) || (N > 15)) return 0;
	while (N > 0) {
		bitArray.push( N % 2 );
		N = parseInt( N / 2 );
	}
	return bitArray.reverse().toString().replace(/,/g, '');
}