
let str = "hello world";
let map = new Map();

for (let ch of str) {
    if (map.has(ch)) {
        map.set(ch, map.get(ch) + 1);
    } else {
        map.set(ch, 1);
    }
}

for (let [ch, count] of map) {
    console.log(ch + " : " + count);
}