export const Algorythm = {
    randomElement(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    getLength(){
        return this.randomElement(1000,100000);
    },
    
    getArray(length){
        let arr = [];
        for (let i = 0; i<length; i++){
            arr.push(this.randomElement(-10000,10000))
        }
        return arr;
    },
    
    bubleSort(array){
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
    },
    
    
    
    merge(left,right){
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
    },

    mergeSort(array){
        if (array.length <= 1){
            return array
        }
    
        let mid = Math.floor(array.length/2)
    
        let left = Algorythm.mergeSort(array.slice(0, mid))
        let right = Algorythm.mergeSort(array.slice(mid))
    
        return Algorythm.merge(left,right)
    },
    
    
    getTime(array, sortAlgorythm){
    
        
        const timeStart = performance.now();
        sortAlgorythm(array);
        const endTime = performance.now();
    
        return endTime - timeStart;
    },

    getInfo(){
        const array = this.getArray(this.getLength())
        console.log("Пузырьком " + this.getTime(array,this.bubleSort))
        console.log("Слиянием " + this.getTime(array,this.mergeSort))
    },
        
}