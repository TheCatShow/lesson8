function fn(filter){
    filter();
}

fn(function() {
    console.log('Анонимная функция');
});


let sum = function(a, b) {
    return (a + b);
}

let sum2 = (a, b) => {
    return a + b;
}

let sum3 = a => console.log(a + 100);
sum3(200);

let result = sum(10, 20);
console.log(result);

if (100 > 1) {
    let a = 3000;
    console.log(a);
}

for (let i = 0; i < 5; i++) {
    console.log(`i внутри цикла ${i}`);
}

const b = 1000;
console.log(b);

b = 5000;
console.log(b);