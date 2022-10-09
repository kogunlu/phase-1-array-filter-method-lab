// Code your solution here

function findMatching(arr, name){
    const matchingNames = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase() === name.toLowerCase()){
            matchingNames.push(arr[i])
        }
    }
    return matchingNames
}

function fuzzyMatch(arr, char){
    function lookToChar(item, letter){
        if(letter.length === 1){
           if(item.charAt(0) === letter){
                return item
            }
        }else if(letter.length === 2){
            if(item.charAt(0) === letter.charAt(0) && item.charAt(1) === letter.charAt(1) ){
                return item
            }
        }
        
    }

   const matchingNames = [] 

   for (let i = 0; i < arr.length; i++) {
        if(lookToChar(arr[i],char)){
            matchingNames.push(arr[i]) 
        }
    }
    return matchingNames
}

function matchName(arr, str){
    const matchingNames = arr.filter(function(item){
        if(item.name === str){
            return item
        }
    })
    return matchingNames
}

