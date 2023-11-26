function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
let m = 10, n = 9, arr = Array(), mat = Array();
// m-строки n-столбцы
console.log("M=" + m);
console.log("N=" + n)
while (arr.length < n) {
    arr.push(getRandomArbitrary(1, 100));
}
console.log("Набор из N чисел: [" + arr + ']');
for (let i = 0; i < m; i++) {
    mat.push([]);
    for (let j = 0; j < n; j++) {
        mat[i][j] = arr[j];
    }
}
console.log(mat)
