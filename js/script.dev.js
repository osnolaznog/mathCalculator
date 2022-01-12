"use strict";

// SQUARE
function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

function squareCalculate() {
  var squareSide = document.getElementById("squareInput");
  var squareValue = Number(squareSide.value);
  console.log(squareValue);
  var perimeter = squarePerimeter(squareValue);
  var area = squareArea(squareValue);
  var squareCard = document.getElementById("squareCard");
  squareCard.style.transform = "rotateY(180deg)";
  var resultSquarePerimeter = document.getElementById("squareResult");
  var resultSquareArea = document.getElementById("squareResult2");
  resultSquarePerimeter.innerHTML = perimeter;
  resultSquareArea.innerHTML = area;
  /* 
  alert(`Perimetro es ${perimeter} & Area es ${area}`); */

  var closeButton = document.getElementById("squareClose");
  closeButton.addEventListener("click", function () {
    squareCard.style.transform = "rotateY(0deg)";
  });
}

; // TRIANGLE

function trianglePerimeter(side1, base) {
  return side1 + side1 + base;
}

function triangleSemiPerimeter(perimeter) {
  return perimeter / 2;
}

function triangleArea(side1, base, semiPerimeter) {
  return Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side1) * (semiPerimeter - base)).toFixed(2);
}

function triangleHeight(side1, base) {
  return Math.sqrt(Math.pow(side1, 2) - Math.pow(base / 2, 2)).toFixed(2);
}

function triangleCalculate() {
  var triangleSide1 = document.getElementById("triangleInputSide1");
  var valueSide1 = Number(triangleSide1.value);
  /* let triangleSide2 = document.getElementById("triangleInputSide2");
  let valueSide2 = Number(triangleSide2.value); */

  var triangleBase = document.getElementById("triangleInputBase");
  var valueBase = Number(triangleBase.value);
  /*   if (valueSide1 !== valueSide2) {
      alert("Las medidas de los lados deben ser iguales, esta calculadora es para triangulos isosceles")
    } else { */

  var height = triangleHeight(valueSide1, valueBase);
  var perimeter = trianglePerimeter(valueSide1, valueSide1, valueBase);
  var semiPerimeter = triangleSemiPerimeter(perimeter);
  var area = triangleArea(valueSide1, valueBase, semiPerimeter);
  var triangleCard = document.getElementById("triangleCard");
  triangleCard.style.transform = "rotateY(180deg)";
  var resultTriangleHeight = document.getElementById("triangleResult");
  var resultTrianglePerimeter = document.getElementById("triangleResult2");
  var resultTriangleArea = document.getElementById("triangleResult3");
  resultTriangleHeight.innerHTML = height;
  resultTrianglePerimeter.innerHTML = perimeter;
  resultTriangleArea.innerHTML = area;
  var closeButton = document.getElementById("triangleClose");
  closeButton.addEventListener("click", function () {
    triangleCard.style.transform = "rotateY(0deg)";
  });
  /* 
   alert(`
   Perimetro es ${perimeter},
   Altura es ${height},
   Area es ${area}`);
  } */
}

; // CIRCLE
//let circleRadio = 4;

function circlePerimeter(circleRadio) {
  return (circleRadio * 2 * Math.PI).toFixed(2);
}

function circleArea(circleRadio) {
  return (Math.pow(circleRadio, 2) * Math.PI).toFixed(2);
}

function circleCalculate() {
  var radio = document.getElementById("circleRadio");
  var valueRadio = Number(radio.value);
  var perimeter = circlePerimeter(valueRadio);
  var area = circleArea(valueRadio);
  var circleCard = document.getElementById("circleCard");
  circleCard.style.transform = "rotateY(180deg)";
  var resultCirclePerimeter = document.getElementById("circleResult");
  var resultCircleArea = document.getElementById("circleResult2");
  resultCirclePerimeter.innerHTML = perimeter;
  resultCircleArea.innerHTML = area;
  var closeButton = document.getElementById("circleClose");
  closeButton.addEventListener("click", function () {
    circleCard.style.transform = "rotateY(0deg)";
  });
  /*   alert(
      `El radio del circulo es ${valueRadio}cm,
      el diametro es de ${valueRadio * 2}cm,
      el perimetro es de ${perimeter}cm,
      el area es de ${area}.
    `) */
} // percentages


var coupons = [{
  name: "FESTIVE15",
  discount: 15
}, {
  name: "WHITEBEARD",
  discount: 30
}, {
  name: "RUDOLFSDEAL",
  discount: 30
}];

function priceDiscount(price, discount) {
  var percentagetoPay = 100 - discount;
  var discPrice = price * percentagetoPay / 100;
  return discPrice;
}

;

function discountCalculate() {
  var inputPrice = document.getElementById("inputPrice").value; //precio inputado por el usuario en el form

  var inputCoupon = document.getElementById("inputCoupon").value; //codigo de cupon inputado por el usuario en el form

  var discount;
  /*     const resultPrice = document.getElementById("resultPrice");
  */

  var startingPriceResult = document.getElementById("discountResult");
  var couponResult = document.getElementById("discountResult2");
  var discountResult = document.getElementById("discountResult3");

  var isCouponValid = function isCouponValid(coupon) {
    return coupon.name === inputCoupon;
  };

  var userCoupon = coupons.find(isCouponValid);

  if (!userCoupon) {
    alert('el cupon no es valido');
  } else {
    var _discount = userCoupon.discount;
    var priceDiscounted = priceDiscount(inputPrice, _discount);
    /*         resultPrice.innerText = `El precio con descuento es $${priceDiscounted}.`; */

    startingPriceResult.innerHTML = inputPrice;
    couponResult.innerHTML = _discount;
    discountResult.innerHTML = priceDiscounted;
    discountCard.style.transform = "rotateY(180deg)";
  }

  var closeButton = document.getElementById("discountClose");
  closeButton.addEventListener("click", function () {
    discountCard.style.transform = "rotateY(0deg)";
  });
}

;