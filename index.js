// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {}

Calculator.add = function() {
    return 1 + 3
}

Calculator.subtract = function() {
    return 1 - 3
}

Calculator.multiply = function() {
    return 1 * 3
}

Calculator.divide = function() {
    return 10 / 5
}

function actionApplyer(int, arr) {
    arr.forEach(func => int = func(int))
    return int
}