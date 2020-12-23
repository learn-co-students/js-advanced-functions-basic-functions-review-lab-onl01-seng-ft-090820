// Your code here
 let saturdayFun =  (activity = "roller-skate") => `This Saturday, I want to ${activity}!`

 let mondayWork = (office = "go to the office") => `This Monday, I will ${office}.`

 let wrapAdjective = (inner ="*") => (adj ="special") => `You are ${inner}${adj}${inner}!`

 let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

//let actionApplyer = (num, arr) => ~~(arr.length === 1 &&  num(arr) === (num) )

let actionApplyer = function(int, arr){
    if(arr.length === 0){
        return int
    }else{      
        for(const calc of arr){
            int = calc(int)
        }
        return int
    }
}
