const randomElement = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getLength = () => {
    return randomElement(1000,100000);
}

const getArray = (length) => {
    let arr = [];
    for (let i = 0; i<length; i++){
        arr.push(randomElement(0,100))
    }
    return arr;
}

const bubleSort = (array) => {
    const len = array.length
    let arrayCopy = array.map((element) => element)
    for (let i = 0; i<len; i++){
        for (let j = 0; j<len-i-1; j++){
            if (arrayCopy[j] > arrayCopy[j+1]){
                const temp = arrayCopy[j]
                arrayCopy[j] = arrayCopy[j+1]
                arrayCopy[j+1] = temp
            }
        }
    }
    return arrayCopy;
}



const merge = (left,right) => {
    let sorted = [];

    while (left.length && right.length){
        if (left[0]<right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }

    return [...sorted, ...left, ...right]
}
const mergeSort = (array) => {
    if (array.length <= 1){
        return array
    }

    let mid = Math.floor(array.length/2)

    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return merge(left,right)
}


const getTime = (array,sortAlgorythm) => {

    const timeStart = performance.now();
    sortAlgorythm(array);
    const endTime = performance.now();

    return endTime - timeStart;
}

const main = () => {

    array = getArray(getLength());
    console.log("Пузырьком " + getTime(array,bubleSort));
    console.log("Слиянием " + getTime(array,mergeSort));
}

main()