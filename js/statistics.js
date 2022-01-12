// AVERAGE OR ARITHMETIC MEAN

function averageCalculate() {
    const datasetAverageInput = (document.getElementById("averageDataset")).value;
    const datasetAverageArray = datasetAverageInput.split(",");
    const datasetAverageNumbers = datasetAverageArray.map(numStr => parseInt(numStr));

    const datasetAverageResult = document.getElementById("averageResult");
    const averageResult = document.getElementById("averageResult2");
    const averageCard = document.getElementById("averageCard");

    const sumList = datasetAverageNumbers.reduce(
        function (sumSubTotal = 0, newItem){
          return sumSubTotal + newItem;
        }
      );
      
      const averageList = sumList / datasetAverageNumbers.length;

      averageCard.style.transform = "rotateY(180deg)";
      datasetAverageResult.innerHTML = datasetAverageNumbers;
      averageResult.innerHTML = averageList;

      

/*    console.log(datasetAverageArray);
      console.log(typeof datasetAverageArray);
      console.log(datasetAverageNumbers);
      console.log(typeof datasetAverageNumbers);
      console.log(averageList);
      return averageList; */ 
      

      const closeButton = document.getElementById("averageClose");

      closeButton.addEventListener("click", function() {
        averageCard.style.transform = "rotateY(0deg)"
      });
    };
    
    
// MEDIAN

function medianAverageCalculate() {
    const datasetMedianInput = (document.getElementById("medianDataset")).value;
    console.log(datasetMedianInput);
    const datasetMedianArray = datasetMedianInput.split(",");
    console.log(datasetMedianArray);
    const datasetMedianNumbers = datasetMedianArray.map(numStr => parseInt(numStr));
    console.log(datasetMedianNumbers);
    
    const sumList = datasetMedianNumbers.reduce(
        function (sumSubTotal = 0, newItem){
          return sumSubTotal + newItem;
        }
      );
      console.log(sumList);
      const medianAverage = sumList / datasetMedianNumbers.length;
      console.log(medianAverage);
      return medianAverage;

    };

function isEven(number){
    
    if (number % 2 === 0){
    return true;
    } else {
    return false;
    };
};

let median;

function medianCalculate (){
    const datasetMedianInput = (document.getElementById("medianDataset")).value;
    const datasetMedianArray = datasetMedianInput.split(",");
    const datasetMedianNumbers = datasetMedianArray.map(numStr => parseInt(numStr));

    const datasetMedianResult = document.getElementById("medianResult");
    const medianResult = document.getElementById("medianResult2");
    const medianCard = document.getElementById("medianCard");

    const listMedian = datasetMedianNumbers.sort((a, b) => a - b);
    
    const halfListMedian = parseInt(listMedian.length / 2);

    if (isEven(listMedian.length)) {
    
    const firstElement = listMedian[halfListMedian - 1];
    const secondElement = listMedian[halfListMedian];
    console.log(firstElement);
    console.log(secondElement);

    const averageFirstSecondElements = (firstElement + secondElement) / 2;
    
    median = averageFirstSecondElements;
    
    
    } else {
    
    median = listMedian[halfListMedian];
    };

    medianCard.style.transform = "rotateY(180deg)";
    datasetMedianResult.innerHTML = datasetMedianNumbers;
    medianResult.innerHTML = median;
    
    const closeButton = document.getElementById("medianClose");

    closeButton.addEventListener("click", function() {
      medianCard.style.transform = "rotateY(0deg)"
    });

};
    
const numbersListCount = {};

function modeCalculate(){

    const datasetModeInput = (document.getElementById("modeDataset")).value;
    const datasetModeArray = datasetModeInput.split(",");
    const datasetModeNumbers = datasetModeArray.map(numStr => parseInt(numStr));
    console.log(datasetModeInput);
    console.log(datasetModeArray);
    console.log(datasetModeNumbers);

    const datasetModeResult = document.getElementById("modeResult");
    const modeResult = document.getElementById("modeResult2");
    const modeCard = document.getElementById("modeCard");
    
    datasetModeNumbers.map(
    function(element){
        
        if (numbersListCount[element]) {
        numbersListCount[element] += 1; // le suma +1 al elemento que ya estaba guardado
        } else {
            numbersListCount[element] = 1;
        };
    });

    const numbersListArray = Object.entries(numbersListCount).sort(
    function (accumulatedValue, newValue){
        return accumulatedValue[1] - newValue[1];
    });

    const mode = [numbersListArray[numbersListArray.length - 1][0]];
/*     const modeValue = [numbersListArray[numbersListArray.length - 1][1]]; */
    
    modeCard.style.transform = "rotateY(180deg)";
    datasetModeResult.innerHTML = datasetModeNumbers;
    modeResult.innerHTML = mode;

    const closeButton = document.getElementById("modeClose");

    closeButton.addEventListener("click", function() {
      modeCard.style.transform = "rotateY(0deg)"
    });
};
