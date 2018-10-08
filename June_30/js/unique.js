function unique(arr) {
    /* Using Set */
    let uniques = new Set(arr);
    return uniques;

    /* Other version 1 
    let uniques = arr.filter((value, index) => {
        return arr.indexOf(value) == index;
    })
    return uniques;
    */

    /* Other version 2 
    let uniques = [];
    for (let item of arr)
        if (!uniques.includes(item)) uniques.push(item);
    return uniques;
    */
}

let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

let valuesSet = unique(values);

// alert(unique(values));

for (let key of valuesSet) {
    console.log(key);
}