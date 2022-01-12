"use strict";

// AVERAGE OR ARITHMETIC MEAN
function averageCalculate() {
  var datasetAverageInput = document.getElementById("averageDataset").value;
  var datasetAverageArray = datasetAverageInput.split(",");
  var datasetAverageNumbers = datasetAverageArray.map(function (numStr) {
    return parseInt(numStr);
  });
  var datasetAverageResult = document.getElementById("averageResult");
  var averageResult = document.getElementById("averageResult2");
  var averageCard = document.getElementById("averageCard");
  var sumList = datasetAverageNumbers.reduce(function () {
    var sumSubTotal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newItem = arguments.length > 1 ? arguments[1] : undefined;
    return sumSubTotal + newItem;
  });
  var averageList = sumList / datasetAverageNumbers.length;
  averageCard.style.transform = "rotateY(180deg)";
  datasetAverageResult.innerHTML = datasetAverageNumbers;
  averageResult.innerHTML = averageList;
  /*    console.log(datasetAverageArray);
        console.log(typeof datasetAverageArray);
        console.log(datasetAverageNumbers);
        console.log(typeof datasetAverageNumbers);
        console.log(averageList);
        return averageList; */

  var closeButton = document.getElementById("averageClose");
  closeButton.addEventListener("click", function () {
    averageCard.style.transform = "rotateY(0deg)";
  });
}

; // MEDIAN

function medianAverageCalculate() {
  var datasetMedianInput = document.getElementById("medianDataset").value;
  console.log(datasetMedianInput);
  var datasetMedianArray = datasetMedianInput.split(",");
  console.log(datasetMedianArray);
  var datasetMedianNumbers = datasetMedianArray.map(function (numStr) {
    return parseInt(numStr);
  });
  console.log(datasetMedianNumbers);
  var sumList = datasetMedianNumbers.reduce(function () {
    var sumSubTotal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newItem = arguments.length > 1 ? arguments[1] : undefined;
    return sumSubTotal + newItem;
  });
  console.log(sumList);
  var medianAverage = sumList / datasetMedianNumbers.length;
  console.log(medianAverage);
  return medianAverage;
}

;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }

  ;
}

;
var median;

function medianCalculate() {
  var datasetMedianInput = document.getElementById("medianDataset").value;
  var datasetMedianArray = datasetMedianInput.split(",");
  var datasetMedianNumbers = datasetMedianArray.map(function (numStr) {
    return parseInt(numStr);
  });
  var datasetMedianResult = document.getElementById("medianResult");
  var medianResult = document.getElementById("medianResult2");
  var medianCard = document.getElementById("medianCard");
  var listMedian = datasetMedianNumbers.sort(function (a, b) {
    return a - b;
  });
  var halfListMedian = parseInt(listMedian.length / 2);

  if (isEven(listMedian.length)) {
    var firstElement = listMedian[halfListMedian - 1];
    var secondElement = listMedian[halfListMedian];
    console.log(firstElement);
    console.log(secondElement);
    var averageFirstSecondElements = (firstElement + secondElement) / 2;
    median = averageFirstSecondElements;
  } else {
    median = listMedian[halfListMedian];
  }

  ;
  medianCard.style.transform = "rotateY(180deg)";
  datasetMedianResult.innerHTML = datasetMedianNumbers;
  medianResult.innerHTML = median;
  var closeButton = document.getElementById("medianClose");
  closeButton.addEventListener("click", function () {
    medianCard.style.transform = "rotateY(0deg)";
  });
}

;
var numbersListCount = {};

function modeCalculate() {
  var datasetModeInput = document.getElementById("modeDataset").value;
  var datasetModeArray = datasetModeInput.split(",");
  var datasetModeNumbers = datasetModeArray.map(function (numStr) {
    return parseInt(numStr);
  });
  console.log(datasetModeInput);
  console.log(datasetModeArray);
  console.log(datasetModeNumbers);
  var datasetModeResult = document.getElementById("modeResult");
  var modeResult = document.getElementById("modeResult2");
  var modeCard = document.getElementById("modeCard");
  datasetModeNumbers.map(function (element) {
    if (numbersListCount[element]) {
      numbersListCount[element] += 1; // le suma +1 al elemento que ya estaba guardado
    } else {
      numbersListCount[element] = 1;
    }

    ;
  });
  var numbersListArray = Object.entries(numbersListCount).sort(function (accumulatedValue, newValue) {
    return accumulatedValue[1] - newValue[1];
  });
  var mode = [numbersListArray[numbersListArray.length - 1][0]];
  /*     const modeValue = [numbersListArray[numbersListArray.length - 1][1]]; */

  modeCard.style.transform = "rotateY(180deg)";
  datasetModeResult.innerHTML = datasetModeNumbers;
  modeResult.innerHTML = mode;
  var closeButton = document.getElementById("modeClose");
  closeButton.addEventListener("click", function () {
    modeCard.style.transform = "rotateY(0deg)";
  });
}

;