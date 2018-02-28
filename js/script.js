	var a = 5,
	h = 3;

	function getTriangleArea(a, h) {
		if (a < 0 || h < 0) {
		return "nieprawidłowe dane";
	} 
		return a * h / 2
	}
	console.log(getTriangleArea(5, 3));
	var triangle1Area = getTriangleArea(2, 8);
	var triangle1Area = getTriangleArea(4, 16);
	var triangle1Area = getTriangleArea(6, 24);