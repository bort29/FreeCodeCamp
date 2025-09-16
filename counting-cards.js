** start of script.js **

let count = 0;

function cc(card) {
  // Only change code below this line
if ( card >= 2 && card < 7 ){
  count += 1 ;
} else if ( card >= 7 && card < 10 ){
  count += 0 ;
} else {
  count -= 1 ;
} 
  if (count > 0) return count + " Bet";
  return count + " Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

** end of script.js **

