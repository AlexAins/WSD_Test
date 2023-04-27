function WaterFill(arr, int){
    // Stating variables
    let bottleSize = arr;
    let taps = int;
    let tapQueue = [];

    // Creating element in array for each tap
    for(let i=0; i<taps; i++){
        tapQueue.push(0);
    }

    // Finding smallest Tap Queue 
    let smallestQueue = tapQueue.indexOf(Math.min(...tapQueue))

    // Now need to use a for loop to add time to each tap in the array, then have next bottle find smallest queue and repeat for all bottles.
    // After we can simply find highest tap time in tapQueue array to find total time of bottle filling event

    console.log(smallestQueue);
    console.log(tapQueue);
};

WaterFill([1000,500], 5);