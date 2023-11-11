const removeFromArray = function(arr,...args) {
    const newArray=[]
    arr.forEach(Ele => {
        if(args!=Ele){
            newArray.push(Ele);
                }
    });
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
