Project Euler - Problem 17 - Number letter counts

function numberLetterCounts(limit) {
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const tens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const hundred = "hundred";
const thousand = "thousand";

let num = limit;
let numLength = 0;

while(num != 0){
  let actualNum = num;
  if (actualNum >= 1000){
    numLength += thousand.length +3 ;
    actualNum -= 1000;  
  }

  if(actualNum >= 100 && actualNum < 1000 && actualNum != 0){
    numLength += ones[Math.floor(actualNum/100)].length + hundred.length;     
    actualNum -= Math.floor(actualNum/100)*100;
    if (actualNum > 0){
      numLength += 3; //"and"
    }
  }

  if(actualNum >= 20 && actualNum < 100 && actualNum != 0){
    numLength += tens[Math.floor(actualNum/10)].length;
    actualNum -= Math.floor(actualNum/10)*10;  
  } 
  
  if(actualNum >= 10 && actualNum < 20 && actualNum != 0){
    numLength += tenToTwenty[actualNum-10].length; 
    actualNum = 0;
  } else if (actualNum != 0) {
    numLength += ones[actualNum].length;
  }
  num--;
 }

  return numLength;
}

numberLetterCounts(1000);
