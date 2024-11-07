
function getAreaOfCircle(radius) {
    let area = 3.14 * (radius * radius);
    return area;
  }
  console.log("Area of Circle:", getAreaOfCircle(5));
  
  function getCircumferenceOfCircle(radius) {
    let circumference = 2 * 3.14 * radius;
    return circumference;
  }
  console.log("Circumference of Circle:", getCircumferenceOfCircle(5));

  
  function getAreaOfSquare(side) {
    let area = side * side;
    return area;
  }
  console.log("Area of Square:", getAreaOfSquare(4));

  
  
  function getAreaOfTriangle(base, height) {
    let area = 0.5 * base * height;
    return area;
  }
  console.log("Area of Triangle:", getAreaOfTriangle(3, 6));
  