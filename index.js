// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
    }

    function wrapAdjective(flair="*") {
        return function(param="special") {
            return `You are ${flair}${param}${flair}!`
        }
    }
    
    let prompt = wrapAdjective('!!!')('great')
    
    const Calculator = {
        use: 'arithmetic',
        add: function(n1, n2) {
            return n1 + n2
        },
        subtract: function(n1, n2) {
            return n1 - n2
        },
        multiply: function(n1, n2) {
            return n1 * n2
        },
        divide: function(n1, n2) {
            return n1 / n2
        }
    }
    
    function actionApplyer(n, array) {
        if (array.length === 0) {
            return n
        } else {
            for(let i = 0; i < array.length; i++) { 
                n = array[i](n) 
            }
        }
        return n
    }