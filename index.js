#! usr/bin/env node
import inquirer from "inquirer";
//declaring a constant 'answer', to store user's input.
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a paragraph to count words in it:",
    },
]);
//storing user's input in a constant variable and applying strings methods that will remove whitespaces in the paragraph and split them in array of single words(strings).
const words = answer.sentence.trim().split(" ");
//print the word count of array to the console.
console.log(`Your paragraph's word count is ${words.length}`);
