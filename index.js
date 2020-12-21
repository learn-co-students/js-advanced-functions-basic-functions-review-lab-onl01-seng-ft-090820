// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(sym = "*") {
    return function(adj = "special") {
        return `You are ${sym}${adj}${sym}!`
    }
}

const Calculator = {

    add: function(num1, num2){
        return num1 + num2
    },

    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2){
        return num1 * num2        
    },

    divide: function(num1, num2) {
        return num1 / num2
    }

}

function actionApplyer(num, array) {
    if (array.length === 0){
        return num
    } else {
        for(let i = 0; i <array.length; i++) {
            num = array[i](num)
        }
    }
    return num
}



