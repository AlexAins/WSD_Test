// Main Question

function WaterFill(bottleSize, taps){

    // Input Verification
    if(bottleSize.length < 1 || !Array.isArray(bottleSize) || !bottleSize.every(num => Number.isInteger(num))){
        throw new Error('Invalid Input: bottleSize have to be an array of non-negative numbers')
    }
    
    if(taps < 1 || typeof(taps) !== 'number'){
        throw new Error('Invalid Input: taps has to be a positive integer')
    }

    // Stating variables
    let tapQueue = [];

    // Creating element in array for each tap
    for(let i=0; i<taps; i++){
        tapQueue.push(0);
    }

    // For Loop to add time for each water bottle to array of taps
    for(let j=0; j<bottleSize.length; j++){
        let smallestQueue = tapQueue.indexOf(Math.min(...tapQueue));
        tapQueue[smallestQueue] += bottleSize[j]/100;
    }

    // Finding tap with highest time which will be total time
    let totalTime = Math.max(...tapQueue)

    console.log("The total time to fill all water bottles is: " + totalTime + " seconds");
};

WaterFill([1000,500,250,600,150], 4);