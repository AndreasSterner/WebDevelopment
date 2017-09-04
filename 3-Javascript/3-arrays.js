var myArray = new Array();

myArray[0] = "Pizza";

myArray[1] = "Chocolate";

console.log('Före', myArray);

myArray.push("Coffe");

console.log('Efter', myArray);

var tweets = ["Hey", "What's up?ht", "Check this out!"];

console.log(tweets);

tweets.splice(1,1);

console.log(tweets);

tweets.splice(1,2);

console.log(tweets);

var tweets = ["Hey", "What's up?", "Check this out!"];

console.log(tweets);

tweets.splice(1, 0, "Listening to some music");

console.log(tweets);
