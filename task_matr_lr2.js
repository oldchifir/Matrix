function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
// m-строки n-столбцы
//let N = getRandomArbitrary(1, 10), M = getRandomArbitrary(1, 10), arr = Array();
let m = 4, n = 3, arr = Array();
//генерация матрицы
for (let i = 0; i < m; i++) {
    arr.push([]);
    for (let j = 0; j < n; j++) {
        arr[i][j] = getRandomArbitrary(-10, 3);
    }
}
arr = [[-1, 3, -2], [-1, -4, -5], [-3, -2, -1], [-3, -2, -1]];
console.log("Изначальная матрица");
console.log(arr);
// выделяем столбец с отрицатеьными числами
let negative_column = Array(), flag = '', namber_of_negative_column = 0;
for (let i = 0; i < n; i++) {
    flag = true;
    for (let j = 0; j < m; j++) {
        negative_column[j] = arr[j][i];
        namber_of_negative_column = i;
        if (arr[j][i] >= 0) {
            flag = false;
        }
    }
    if (flag) {
        break
    }
}
if (flag == false) {
    negative_column = []
}
// столбец с номером N
let n_column = Array();
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if ((i == m - 1)) {
            n_column.push(arr[j][i]);
        }
    }
}
console.log("Столбец, содержащий только отрицательные числа")
console.log(negative_column)
console.log("столбец с номером N")
console.log(n_column)
if (flag === false || n_column.length === 0 || n_column.toString() === negative_column.toString()) {
    console.log("Матрца не изменилась т.к. нет подходящего столбца")
    console.log(arr);
} else {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == m - 1) {
                arr[j][i] = negative_column[j];
            }
            if (i == namber_of_negative_column) {
                arr[j][i] = n_column[j]
            }
        }
    }
    console.log("Измененная матрица")
    console.log(arr)
}