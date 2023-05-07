//Завдання 1.

//Створіть програму, яка обчислює факторіал натурального числа n,
// яке користувач введе з клавіатури.

// let n1 = +prompt('Write number');
// let result = 1;
// for(let i=1; i<=n1; i++){
//     result = result * i;
// }
// document.write(result)

let n1 = +prompt('Write number');
let i = 1;
let result = 1;
while(i<=n1){
    result = result * i;
    i++;
}
document.write(result);