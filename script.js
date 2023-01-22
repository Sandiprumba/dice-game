// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = GAME_STATE_CHOOSE_DICE_ORDER;
var gameState = GAME_STATE_DICE_ROLL;

var playerRolls = [];

// generate random Number

var diceRoll = function () {
  var randomNumber = Math.floor(Math.random() * 6);
  console.log("rolldice output, randomInteger:", randomNumber);
  return randomNumber;
};

var rollDiceForPlayer = function () {
  counter = 0;
  while (counter < 2);
  playerRolls.push(diceRoll);
  counter = counter + 1;
  console.log(counter);
  return `welcome ${playerRolls[0]} and ${playerRolls[1]} please input either 1 or 2 to play the game thanks`;
};
