// UC 2 : Check for daily wage based on whether the employee is part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHour = 0;
employeeCheck = Math.floor((Math.random()*10) % 3);
switch(employeeCheck)
{
    case IS_PART_TIME:
        employeeHour = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        employeeHour = FULL_TIME_HOURS;
        break;
    default:
        employeeHour = 0;
        break;
}
let employeeWage = employeeHour * WAGE_PER_HOUR;
console.log("Employee Wage :" + employeeWage);