let styles = ['Jazz', 'Blues', ];
console.log(styles);
console.log('\n');

styles.push('Rock-n-Roll');
console.log(styles);
console.log('\n');

styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles);
console.log('\n');

console.log(`Removed: ${styles.shift()}`);
console.log('\n');

console.log(styles);
console.log('\n');

styles.unshift('Rap', 'Reggae');
console.log(styles);
console.log('\n');