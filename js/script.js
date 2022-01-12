// SQUARE

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

function squareCalculate(){
  let squareSide = document.getElementById("squareInput");
  let squareValue = Number(squareSide.value);
  console.log(squareValue);

  const perimeter = squarePerimeter(squareValue);
  const area = squareArea(squareValue);

  const squareCard = document.getElementById("squareCard");

  squareCard.style.transform = "rotateY(180deg)";

 
  const resultSquarePerimeter = document.getElementById("squareResult");
  const resultSquareArea = document.getElementById("squareResult2");


  resultSquarePerimeter.innerHTML = perimeter;
  resultSquareArea.innerHTML = area;
  /* 
  alert(`Perimetro es ${perimeter} & Area es ${area}`); */

const closeButton = document.getElementById("squareClose");

closeButton.addEventListener("click", function() {
      squareCard.style.transform = "rotateY(0deg)"
    });
};




// TRIANGLE
function trianglePerimeter (side1, base) {
  return side1 + side1 + base;
  }

function triangleSemiPerimeter(perimeter) { 
  return perimeter / 2; 
  }

function triangleArea (side1, base, semiPerimeter){ 
  return (Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side1) * (semiPerimeter - base))).toFixed(2);
  }

function triangleHeight (side1, base) { 
  return Math.sqrt(Math.pow(side1, 2) - Math.pow(base / 2, 2)).toFixed(2); 
  }

function triangleCalculate(){
  let triangleSide1 = document.getElementById("triangleInputSide1");
  let valueSide1 = Number(triangleSide1.value);
  
  /* let triangleSide2 = document.getElementById("triangleInputSide2");
  let valueSide2 = Number(triangleSide2.value); */
    
  let triangleBase = document.getElementById("triangleInputBase");
  let valueBase = Number(triangleBase.value);
  
/*   if (valueSide1 !== valueSide2) {
    alert("Las medidas de los lados deben ser iguales, esta calculadora es para triangulos isosceles")
  } else { */
  
    const height = triangleHeight(valueSide1, valueBase);
    const perimeter = trianglePerimeter(valueSide1, valueSide1, valueBase);
    const semiPerimeter = triangleSemiPerimeter(perimeter);
    const area = triangleArea (valueSide1, valueBase, semiPerimeter);

    const triangleCard = document.getElementById("triangleCard");

    triangleCard.style.transform = "rotateY(180deg)";

    const resultTriangleHeight = document.getElementById("triangleResult");
    const resultTrianglePerimeter = document.getElementById("triangleResult2");
    const resultTriangleArea = document.getElementById("triangleResult3");


    resultTriangleHeight.innerHTML = height;
    resultTrianglePerimeter.innerHTML = perimeter;
    resultTriangleArea.innerHTML = area;

    const closeButton = document.getElementById("triangleClose");

    closeButton.addEventListener("click", function() {
          triangleCard.style.transform = "rotateY(0deg)"
        });
   /* 
    alert(`
    Perimetro es ${perimeter},
    Altura es ${height},
    Area es ${area}`);
 } */
};


// CIRCLE
//let circleRadio = 4;
function circlePerimeter (circleRadio){ 
  return ((circleRadio * 2) * Math.PI).toFixed(2);
}

function circleArea (circleRadio){ 
  return ((Math.pow(circleRadio, 2)) * Math.PI).toFixed(2);
}

function circleCalculate(){
  let radio = document.getElementById("circleRadio");
  let valueRadio = Number(radio.value);
  
  const perimeter = circlePerimeter(valueRadio);
  const area = circleArea(valueRadio);
  
  const circleCard = document.getElementById("circleCard");

  circleCard.style.transform = "rotateY(180deg)";

 
  const resultCirclePerimeter = document.getElementById("circleResult");
  const resultCircleArea = document.getElementById("circleResult2");


  resultCirclePerimeter.innerHTML = perimeter;
  resultCircleArea.innerHTML = area;

  const closeButton = document.getElementById("circleClose");

  closeButton.addEventListener("click", function() {
      circleCard.style.transform = "rotateY(0deg)"
    });

/*   alert(
    `El radio del circulo es ${valueRadio}cm,
    el diametro es de ${valueRadio * 2}cm,
    el perimetro es de ${perimeter}cm,
    el area es de ${area}.
  `) */
}

// percentages
const coupons = [
    {name: "FESTIVE15", 
    discount: 15},
    {name: "WHITEBEARD", 
    discount: 30},
    {name: "RUDOLFSDEAL", 
    discount: 30}
   ];
  
function priceDiscount(price, discount){
    const percentagetoPay = 100 - discount;
    const discPrice = (price * percentagetoPay) / 100;
    
    return discPrice;
  };
  
function discountCalculate(){
    const inputPrice = (document.getElementById("inputPrice")).value; //precio inputado por el usuario en el form
    const inputCoupon = (document.getElementById("inputCoupon")).value; //codigo de cupon inputado por el usuario en el form
    let discount;
    /*     const resultPrice = document.getElementById("resultPrice");
    */    
    const startingPriceResult = document.getElementById("discountResult");
    const couponResult = document.getElementById("discountResult2");
    const discountResult = document.getElementById("discountResult3");
    
    const isCouponValid = function(coupon){
      return coupon.name === inputCoupon
    }
    
    const userCoupon = coupons.find(isCouponValid);
    
    if (!userCoupon){
      alert('el cupon no es valido');
    } else {
        const discount = userCoupon.discount;
        const priceDiscounted = priceDiscount(inputPrice, discount);
/*         resultPrice.innerText = `El precio con descuento es $${priceDiscounted}.`; */

        startingPriceResult.innerHTML = inputPrice;
        couponResult.innerHTML = discount;
        discountResult.innerHTML = priceDiscounted

        discountCard.style.transform = "rotateY(180deg)";
    } 

    const closeButton = document.getElementById("discountClose");

    closeButton.addEventListener("click", function() {
      discountCard.style.transform = "rotateY(0deg)"
    });
};



