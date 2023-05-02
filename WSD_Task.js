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
    return totalTime;
};


// Added Time to walk to Tap (Assuming people at start at Queue)
function WalkWaterFill(bottleSize, taps){

    // Input Verification
    if(bottleSize.length < 1 || !Array.isArray(bottleSize) || !bottleSize.every(num => Number.isInteger(num))){
        throw new Error('Invalid Input: bottleSize have to be an array of non-negative numbers')
    }
    
    if(taps < 1 || typeof(taps) !== 'number'){
        throw new Error('Invalid Input: taps has to be a positive integer')
    }

    // Stating variables
    let tapQueue = [];
    let walkTime = 2;

    // Creating element in array for each tap
    for(let i=0; i<taps; i++){
        tapQueue.push(0);
    }

    // For Loop to add time for each water bottle to array of taps
    for(let j=0; j<bottleSize.length; j++){
        let smallestQueue = tapQueue.indexOf(Math.min(...tapQueue));
        tapQueue[smallestQueue] += walkTime + bottleSize[j]/100;
    }

    // Finding tap with highest time which will be total time
    let totalTime = Math.max(...tapQueue)

    console.log("The total time to fill all water bottles is: " + totalTime + " seconds");
    return totalTime;
}


// Different Flows (Assuming user knows flow of each tap) (Includes as walk to tap variable that can be edited)
function FlowWaterFill(bottleSize, taps, tapFlowRate){

    // Input Verification
    if(bottleSize.length < 1 || !Array.isArray(bottleSize) || !bottleSize.every(num => Number.isInteger(num))){
        throw new Error('Invalid Input: bottleSize has to be an array of non-negative numbers')
    }
    
    if(taps < 1 || typeof(taps) !== 'number'){
        throw new Error('Invalid Input: taps has to be a positive integer')
    }

    if(tapFlowRate.length !== taps || !Array.isArray(tapFlowRate) || !tapFlowRate.every(num => Number.isInteger(num))){
        throw new Error('Invalid Input: tapFlowRate has to be an array of non-negative numbers equal to the stated amount of taps')
    }


    // Stating variables
    let tapQueue = [];
    let walkTime = 0;

    // Creating element in array for each tap
    for(let i=0; i<taps; i++){
        tapQueue.push(0);
    }

    // For Loop to add time for each water bottle to array of taps
    for(let j=0; j<bottleSize.length; j++){
        let smallestQueue = tapQueue.indexOf(Math.min(...tapQueue));
        tapQueue[smallestQueue] += walkTime + bottleSize[j]/tapFlowRate[smallestQueue];
    }

    // Finding tap with highest time which will be total time
    let totalTime = Math.max(...tapQueue)

    console.log("The total time to fill all water bottles is: " + totalTime + " seconds");
    return totalTime;
}

// Examples
WaterFill([1000,500,250,600,150], 2);
WalkWaterFill([1000,500,250,600,150], 2);
FlowWaterFill([1000,500,250,600,150],2,[100,100])

// Bonus Point 4
// I believe the answer is No but not sure how to prove it.