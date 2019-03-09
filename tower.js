//all of the js code

//two variables used to store the value of input parameters
var s = 8;
var n = 6;

//a seperate function used for rolling stats in D&D fifth edition via a method selected by the user via a drop-down selection
function statRoll() {
     var method = document.getElementById("rollType").value;
     var choices = "";
     var statSum = 0;
     if (method == "fourDSixDrop") {
          for (i = 1; i <= 6; i++) {
               var rOne = Math.floor(Math.random() * (6)) + 1;
               var rTwo = Math.floor(Math.random() * (6)) + 1;
               var rThree = Math.floor(Math.random() * (6)) + 1;
               var rFour = Math.floor(Math.random() * (6)) + 1;
               var dropped = Math.min(rOne, rTwo, rThree, rFour);
               var stat = rOne + rTwo + rThree + rFour - dropped;
               choices += stat + ", ";
               statSum += stat;
          }
     } else if (method == "threeDSix") {
          for (i = 1; i <= 6; i++) {
               var rOne = Math.floor(Math.random() * (6)) + 1;
               var rTwo = Math.floor(Math.random() * (6)) + 1;
               var rThree = Math.floor(Math.random() * (6)) + 1;
               var stat = rOne + rTwo + rThree;
               choices += stat + ", ";
               statSum += stat;
          }
     } else if (method == "threeDSixDropPT") {
          for (i = 1; i <= 6; i++) {
               var rOne = Math.floor(Math.random() * (6)) + 1;
               var rTwo = Math.floor(Math.random() * (6)) + 1;
               var rThree = Math.floor(Math.random() * (6)) + 1;
               var dropped = Math.min(rOne, rTwo, rThree);
               var stat = rOne + rTwo + rThree + 3 - dropped;
               choices += stat + ", ";
               statSum += stat;
          }
     } else if (method == "insanity") {
          for (i = 1; i <= 6; i++) {
               var stat = Math.floor(Math.random() * (20)) + 1;
               choices += stat + ", ";
               statSum += stat;
          }
     } else {
          alert("Whoops, Looks like a spell went wonky. Please try again later");
     }
     document.getElementById("result").value=choices;
     document.getElementById("total").value=statSum;
}
//this function takes the input from the user and sets the two variables "s" and "n" equal to those. It then calls the dTower function to take that input and roll some dice with it
//also checks to see if more than 9999 dice are being rolled, in which case ouputs an error message instead
function varSet() {
     s = document.getElementById("sides").value;
     n = document.getElementById("numberDice").value;
     if (n > 9999 || n < 1) { 
          alert("By decree of Bahamut the wise, in all his wisdom, rolling more than 9999 or less than 1 dice is forbidden at this time."); 
     } else { 
          dTower(s,n); 
     }   
}
//this is the function to roll dice. takes the number of dice the user wants to roll, the number of sides on those dice, and rolls them.
//also displays a random message every time it is called and checks for special cases (maximum value rolled, all 1s rolled etc.) which trigger special messages
function dTower(sides,number) {
     var output = "";
     var sum = 0;
     var critCheck = document.getElementById("critBox").checked;
     var wMods = parseInt(document.getElementById("mods").value, 10);
     var modifiers = document.getElementById("mods").value;
     if (critCheck == 1) {
          var nRolls = 2 * number;
          for (i = 1; i <= nRolls; i++) {
               var roll = Math.floor(Math.random() * (sides)) + 1;
               output += roll + ", ";
               sum += roll;
               wMods += roll;
               if (i % 15 == 0) {
                    output += "\n";
               } 
          }
          document.getElementById("total").value=sum + " + " + modifiers + " = " + wMods
          document.getElementById("result").value=output
     } else {
          for (i = 1; i <= number; i++) {
               var roll = Math.floor(Math.random() * (sides)) + 1;
               output += roll + ", ";
               sum += roll;
               wMods += roll;
               if (i % 15 == 0) {
                    output += "\n";
               } 
          }
          document.getElementById("total").value=sum + " + " + modifiers + " = " + wMods
          document.getElementById("result").value=output
     }
     var rng;
  if (sum / document.getElementById("numberDice").value == 1) {
          rng = 0; 
     } else {
          rng = Math.floor(Math.random() * 8) + 1;
     }
  switch (rng) {
    case 0:
      document.getElementById("rngQuote").value="It is not the bee that kills, but the swarm";
      break;
    case 1:
      document.getElementById("rngQuote").value="You viciously tap the enemy. They are mildly annoyed";
      break;
    case 2:
      document.getElementById("rngQuote").value="You land a powerful strike with deadly precision...on the enemy's shield";
      break;
    case 3:
      document.getElementById("rngQuote").value="You succesfully dodge the air next to the enemy's fist...unfortunately the fist hurts more";
      break;
    case 4:
      document.getElementById("rngQuote").value="You display a show of strength. It wasn't much";
      break;
    case 5:
      document.getElementById("rngQuote").value="You stab the enemy....while holding the blade backwards.";
      break;
    case 6:
      document.getElementById("rngQuote").value="You swing at the enemy. They get a nice taste of the handle";
      break;
    case 7:
      document.getElementById("rngQuote").value="You throw your spear... backwards";
      break;
    case 8:
      document.getElementById("rngQuote").value="Now that's a lot of damage!";
      break;
    default:
      document.getElementById("rngQuote").value="Take a chance roll the dice";
      break;
  }
}
