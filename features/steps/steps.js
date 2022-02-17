const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

// https://www.monopolyland.com/uk-monopoly-board-list-of-properties/

var board = [
    {name: "Go"},
    {name: "Old Kent Road"},
    null,
    null,
    null,
    null,
    {name: "The Angel Islington"},
    null,
    {name: "In Jail"},
    {name: "Pentonville Road"},
    {name: "Leicester Square"},
    null,
    null,
    null,
    {name: "Goto Jail"},
    {name: "Pall Mall"},
    {name: "Park Lane"},
    null,
    null
];

var game;
var currentPlayer;
var passedGo;

Before(() => {
    passedGo = false;
    currentPlayer = null;
    game = {
        "positions": {
        },
        "balances": {
        },
        "in-jail": {
        }
    }
});

const jailIndex = board.findIndex((where) => where?.name === "In Jail");
const gotoJailIndex = board.findIndex((where) => where?.name === "Goto Jail");

Given('player {string} on {string}', function (player, location) {
    const position = board.findIndex((where) => where?.name === location);
    currentPlayer = player;
    game.positions[currentPlayer] = position;
});

When('the player rolls a {int} and {int}', function (d1, d2) {
    const total = d1 + d2;
    let currentPosition = game.positions[currentPlayer];
    currentPosition += total;
    if (currentPosition === gotoJailIndex) {
        currentPosition = jailIndex;
        game['in-jail'][currentPlayer] = true;
    }

    if (currentPosition >= board.length) {
        game.balances[currentPlayer] += 200;
        passedGo = true;
    }
    game.positions[currentPlayer] = currentPosition % board.length;
});

Then('they land on {string}', function (expectedLocation) {
    const currentLocation = board[game.positions[currentPlayer]].name;
    assert.equal(currentLocation, expectedLocation);
});

Given('player {string} has a balance of £{int}', function (player, balance) {
    currentPlayer = player;
    game.balances[currentPlayer] = balance;
});

Then('their balance is now £{int}', function (expectedBalance) {
    assert.equal(game.balances[currentPlayer], expectedBalance);
});

Then('they are moved immediately to {string}', function (string) {
});

Then('they do not pass through Go', function () {
    assert.equal(passedGo, false);
});