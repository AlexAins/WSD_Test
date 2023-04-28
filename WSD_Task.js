// Main Question

function WaterFill(arr, int){
    // Stating variables
    let bottleSize = arr;
    let taps = int;
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

WaterFill([1000,500,200,250,150], 3);