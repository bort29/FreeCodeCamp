** start of script.js **

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const line = rangeOfNumbers(startNum, endNum - 1) ;
    line.push(endNum);
    return line;
  }
}
  
  


** end of script.js **

