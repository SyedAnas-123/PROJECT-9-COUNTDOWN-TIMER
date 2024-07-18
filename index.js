#! /usr/bin/env node 
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt([
    {
        name: "userinput",
        type: "number",
        message: "PLEASE ENTER THE AMUONT OF SECOND",
        validate: (input) => {
            if (isNaN(input)) {
                return "PLEASE ENTER VALID NUMBER";
            }
            else if (input > 60) {
                return "SECONS MUST BE IN 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = res.userinput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timediff = differenceInSeconds(intervalTime, currentTime);
        if (timediff <= 0) {
            console.log("TIMER HAD EXPIRED");
            process.exit();
        }
        const min = Math.floor((timediff % (36 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
