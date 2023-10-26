// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
creatureName = "Mimic";


// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
creatureDescription = "a creature that lures adventures by hiding itself as a treasure chest."

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
isFriendly = false;

// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
visitorAge = Math.floor(Math.random() * 60) + 1;


// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
canVisit = visitorAge > 15;


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
zooSummary = creatureName + ": " + creatureDescription + ". Is friendly: " + isFriendly + ". Can visit: " + canVisit+". ";

// 7. Print the summary using console.log()
// console.log(zooSummary);


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.

let creatureName1 = "Unicorn";
let creatureDescription1 = "a creature that appears as a horse with a horn, they are known as a paragon of purity";
let isFriendly1 = true;
let canVisit1 = visitorAge > 4;
let zooSummary1 = creatureName1 + ": " + creatureDescription1 + ". Is friendly: " + isFriendly1 + ". Can visit: " + canVisit1+". ";

let creatureName2 = "Dragon";
let creatureDescription2 = "a creature that is able to breathe fire and fly";
let isFriendly2 = true;
let canVisit2 = visitorAge > 16;
let zooSummary2 = creatureName2 + ": " + creatureDescription2 + ". Is friendly: " + isFriendly2 + ". Can visit: " + canVisit2+". ";

let creatureName3 = "Fairy";
let creatureDescription3 = "a creature that is able to fly and likes to play pranks";
let isFriendly3 = true;
let canVisit3 = visitorAge > 10;
let zooSummary3 = creatureName3 + ": " + creatureDescription3 + ". Is friendly: " + isFriendly3 + ". Can visit: " + canVisit3+". ";

allZooSummaries = zooSummary + zooSummary1 + zooSummary2 + zooSummary3;
console.log(allZooSummaries);