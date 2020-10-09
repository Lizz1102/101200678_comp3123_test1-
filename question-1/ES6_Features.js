const lowerCaseWords = (mixedArr) => {      
    return new Promise((resolve, reject) => { 
        let filteredArray = mixedArr.filter(item => (typeof item === "string"))  
        resultArr = filteredArray.map(w => w.toString().toLowerCase())
        resolve(resultArr)   
    })   
}
const mixedArray=['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
.then(result => console.log(result))
.catch(error => console.log(error))
