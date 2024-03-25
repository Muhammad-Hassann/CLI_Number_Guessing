#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 10 + 1)

const answer = await inquirer.prompt([{
    name : "userInput",
    type : "number",
    message : "Please input a number between 1-10"
}]) 

if(answer.userInput === randomNumber){
    console.log("Congratulation! You gussed the correct number")
}
else{
    console.log("You gussed wrong number. Try again!")
}