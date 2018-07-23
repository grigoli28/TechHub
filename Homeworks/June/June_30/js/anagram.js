function aclean(arr) {
    let cleaned = new Map();
    arr.forEach((item) => {
        if (!cleaned.has(item.toLowerCase().split('').sort().join('')))
            cleaned.set(item.toLowerCase().split('').sort().join(''), item);
    })
    return [...cleaned.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));