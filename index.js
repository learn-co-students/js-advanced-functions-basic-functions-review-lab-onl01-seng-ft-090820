
function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

let mondayWork = function (activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(flare= "*") {
    return function (adj= "special") {
        return `You are ${flare}${adj}${flare}!`
    }
}


const Calculator = {
    add: function (one, three) {
        return one + three
    },
    subtract: function (one, three) {
        return one - three 
    },
    multiply: function (one, three) {
        return one * three 
    },
    divide: function (ten, five) {
        return ten / five
    }
}

function actionApplyer(int, arry) {
    for(let i = 0; i < arry.length; i++) {
        int = arry[i](int)
    }
    return int 
}