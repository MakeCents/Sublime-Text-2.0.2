var answer = prompt("Who is your favorite?");

switch(answer) {
  case 'Elora':
    console.log("Your favorite is " + answer);
    break;
  case '':
    console.log("Your favorite is " + answer);
    break;
  // Add your code here!
  default:
  	console.log ("I don't know them.");
}