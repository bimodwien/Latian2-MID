const lotre = [
    {
        "nama": "fadjar",
        "usia": 21,
        "uang": 200000
    },
    {
        "nama": "bimo",
        "usia": 27,
        "uang": 20000000
    },
    {
        "nama": "tarjo",
        "usia": 18,
        "uang": 1500000
    },
    {
        "nama": "khansa",
        "usia": 21,
        "uang": 20000000
    }
]

const value = []
// console.log(lotre)
for (let i = 0; i < lotre.length; i++){
    // console.log(lotre[i].nama)
    if(lotre[i].usia >= 21 && lotre[i].uang >= 400000) {
        value.push({"nama": lotre[i].nama, "tiket":(lotre[i].uang/400000)})
    }
}
console.log(value)