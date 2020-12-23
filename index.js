// Your code here

let saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`

let mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

let wrapAdjective = (string = "*") => (feeling = "special") => `You are ${string}${feeling}${string}!`

let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}


let actionApplyer = function(int, arr){
    if(arr.length === 0){
        return int
    } else{      
        for(const calc of arr){
            int = calc(int)
        }
        return int
    }
}