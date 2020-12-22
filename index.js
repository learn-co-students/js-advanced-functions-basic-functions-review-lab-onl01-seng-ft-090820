function saturdayFun(arg = 'roller-skate'){
    return `This Saturday, I want to ${arg}!`
}

function mondayWork(arg = 'go to the office'){
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(outerArg = '*'){
    return function(innerArg = 'special'){
        return `You are ${outerArg}${innerArg}${outerArg}!`
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

function actionApplyer(num, array){
    for(let i = 0; i < array.length; i++){
        num = array[i](num)
    }
    return num
}